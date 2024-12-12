import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* Drawer component */}
      <div className="drawer">
        {/* Checkbox input for controlling the drawer */}
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        {/* Main content */}
        <div className="drawer-content">
          {/* Navbar */}
          <div className="navbar bg-sky-100 text-black rounded-3xl p-1 mb-2 shadow-lg justify-between">
            <div>
              <div className="flex-none">
                {/* Button to toggle the drawer */}
                <label
                  htmlFor="my-drawer"
                  className="btn btn-square btn-ghost ml-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <Link href={"/"} className="flex btn btn-ghost flex-row ">
                <h1 className="font-bold text-2xl   text-blue-600">wise</h1>
                <h1 className="font-bold text-2xl  text-amber-400">.ai</h1>
              </Link>
            </div>
            <div className="flex-none">
              <div className="avatar">
                <div className="w-12 mr-4 rounded-full">
                  <img src="/user.jpg" />
                </div>
              </div>
              {/* You can add other elements here */}
            </div>
          </div>

          {/* You can add your main page content here */}
        </div>

        {/* Drawer Sidebar */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-sky-100 text-base-content min-h-full w-80 p-4">
            <Link
              href={"/"}
              className="flex btn btn-ghost flex-row mt-4 hover:bg-sky-700 "
            >
              <h1 className="font-bold text-2xl   text-blue-600">wise</h1>
              <h1 className="font-bold text-2xl  text-amber-400">.ai</h1>
            </Link>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
