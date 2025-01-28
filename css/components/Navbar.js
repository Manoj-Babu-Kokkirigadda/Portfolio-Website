import React from 'react';

function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex justify-between">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
