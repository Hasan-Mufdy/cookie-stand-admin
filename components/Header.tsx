import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">Cookie Stand Admin</h1>
          <div className="flex space-x-4">
            <a href="/Users/Home" className="hover:underline">
              Admin Home Page
            </a>
            <a href="/" className="hover:underline">
              Home Page
            </a>
          </div>
        </header>
      );
};

export default Header;
