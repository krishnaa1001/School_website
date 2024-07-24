// src/components/Navbar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Springdale Public School</Link>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        <div
          className={`lg:flex lg:items-center lg:space-x-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/" className="block px-4 py-2 hover:bg-secondary rounded">
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 hover:bg-secondary rounded"
          >
            About Us
          </Link>
          <Link
            to="/academics"
            className="block px-4 py-2 hover:bg-secondary rounded"
          >
            Academics
          </Link>
          <Link
            to="/admissions"
            className="block px-4 py-2 hover:bg-secondary rounded"
          >
            Admissions
          </Link>
          <Link
            to="/faculty"
            className="block px-4 py-2 hover:bg-secondary rounded"
          >
            Faculty
          </Link>
          <Link
            to="/students"
            className="block px-4 py-2 hover:bg-secondary rounded"
          >
            Students
          </Link>
          <Link
            to="/gallery"
            className="block px-4 py-2 hover:bg-secondary rounded"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-secondary rounded"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
