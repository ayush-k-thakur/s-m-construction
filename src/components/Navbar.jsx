import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">S & M</div>
          <div className="space-x-6">
            <a href="#home" className="hover:text-yellow-500">Home</a>
            <a href="#services" className="hover:text-yellow-500">Services</a>
            <a href="#projects" className="hover:text-yellow-500">Projects</a>
            <a href="#blog" className="hover:text-yellow-500">Blog</a>
            <a href="#contact" className="hover:text-yellow-500">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
