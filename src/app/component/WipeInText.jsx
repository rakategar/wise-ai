import { motion } from "framer-motion";

const WipeInText = ({ text }) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
  };

  return (
    <motion.div
      className="overflow-hidden inline-block"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} className="inline-block" variants={item}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WipeInText;
