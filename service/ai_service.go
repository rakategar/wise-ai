package service

import (
	"a21hc3NpZ25tZW50/model"
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"path/filepath"
)

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type AIService struct {
	Client HTTPClient
}

// AnalyzeData mengirimkan permintaan ke endpoint AI untuk menganalisis data tabel berdasarkan query.
func (s *AIService) AnalyzeData(table map[string][]string, query, token string) (string, error) {
    if len(table) == 0 {
        return "", errors.New("table is empty")
    }

    requestBody := model.AIRequest{
        Inputs: model.Inputs{
            Table: table,
            Query: query,
        },
    }
    body, err := json.Marshal(requestBody)
    if err != nil {
        return "", errors.New("failed to marshal request body: " + err.Error())
    }

    req, err := http.NewRequest("POST", "https://api-inference.huggingface.co/models/google/tapas-base-finetuned-wtq", bytes.NewBuffer(body))
    if err != nil {
        return "", errors.New("failed to create HTTP request: " + err.Error())
    }
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+token)

    resp, err := s.Client.Do(req)
    if err != nil {
        return "", errors.New("failed to send HTTP request: " + err.Error())
    }
    defer resp.Body.Close()

    if resp.StatusCode != http.StatusOK {
        return "", errors.New("received non-200 response: " + resp.Status)
    }

    responseBody, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        return "", errors.New("failed to read response body: " + err.Error())
    }

    
    // Update this to match the response body structure
    var tapasResponse map[string]interface{}
err = json.Unmarshal(responseBody, &tapasResponse)
if err != nil {
    return "", errors.New("failed to unmarshal response: " + err.Error())
}

// Ambil jawaban dari properti "answer"
answer, exists := tapasResponse["answer"].(string)
if !exists {
    return "", errors.New("no answer found in the response")
}

// Kembalikan jawaban sebagai hasil
return answer, nil

}

// ChatWithAI mengirimkan permintaan ke model Phi-3.5-mini-instruct di Hugging Face
func (s *AIService) ChatWithAI(context, query, token string) (string, error) {
	// Buat request body dengan format baru
	requestBody := map[string]interface{}{
		"model": "microsoft/Phi-3.5-mini-instruct",
		"messages": []map[string]string{
			{
				"role":    "user",
				"content": query,
			},
		},
		"max_tokens": 500,
		"stream":     false,
	}

	// Serialize body ke JSON
	body, err := json.Marshal(requestBody)
	if err != nil {
		return "", errors.New("failed to marshal request body: " + err.Error())
	}

	// Buat HTTP request
	req, err := http.NewRequest("POST", "https://api-inference.huggingface.co/v1/chat/completions", bytes.NewBuffer(body))
	if err != nil {
		return "", errors.New("failed to create HTTP request: " + err.Error())
	}
	req.Header.Set("Authorization", "Bearer "+token)
	req.Header.Set("Content-Type", "application/json")

	// Kirim request
	resp, err := s.Client.Do(req)
	if err != nil {
		return "", errors.New("failed to send HTTP request: " + err.Error())
	}
	defer resp.Body.Close()

	// Periksa status kode
	if resp.StatusCode != http.StatusOK {
		return "", errors.New("received non-200 response: " + resp.Status)
	}

	// Baca response body
	responseBody, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", errors.New("failed to read response body: " + err.Error())
	}

	// Parse response ke struktur ChatResponse
	var chatResponse model.ChatResponse
	err = json.Unmarshal(responseBody, &chatResponse)
	if err != nil {
		return "", errors.New("failed to unmarshal response: " + err.Error())
	}

	// Ambil content dari pilihan pertama
	if len(chatResponse.Choices) > 0 {
		return chatResponse.Choices[0].Message.Content, nil
	}

	return "", errors.New("no content found in response")
}
// GenerateImage mengirim permintaan ke model black-forest-labs/FLUX.1-dev
func (s *AIService) GenerateImage(query, token string) (string, error) {
	// Buat body request
	requestBody := map[string]string{
		"inputs": query,
	}

	body, err := json.Marshal(requestBody)
	if err != nil {
		return "", errors.New("failed to marshal request body: " + err.Error())
	}

	// Buat HTTP request
	req, err := http.NewRequest("POST", "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev", bytes.NewBuffer(body))
	if err != nil {
		return "", errors.New("failed to create HTTP request: " + err.Error())
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+token)

	// Kirim request
	resp, err := s.Client.Do(req)
	if err != nil {
		return "", errors.New("failed to send HTTP request: " + err.Error())
	}
	defer resp.Body.Close()

	// Periksa status kode
	if resp.StatusCode != http.StatusOK {
		return "", errors.New("received non-200 response: " + resp.Status)
	}

	// Membaca konten file gambar dari respons
	fileData, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", errors.New("failed to read image data: " + err.Error())
	}

	// Membuat nama file unik
	fileName := fmt.Sprintf("image_%s.jpeg", query)
	filePath := filepath.Join("public/images_generates", fileName)

	// Pastikan folder tujuan ada
	if _, err := os.Stat("public/images_generates"); os.IsNotExist(err) {
		err := os.MkdirAll("public/images_generates", 0755)
		if err != nil {
			return "", errors.New("failed to create directory: " + err.Error())
		}
	}

	// Simpan gambar ke folder public/images_generates
	err = os.WriteFile(filePath, fileData, 0644)
	if err != nil {
		return "", errors.New("failed to save image: " + err.Error())
	}

	// Return path relatif untuk frontend
	relativePath := "/images_generates/" + fileName
	return relativePath, nil
}
