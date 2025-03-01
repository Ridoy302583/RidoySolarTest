import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="bi bi-brightness-high-fill text-secondary text-3xl"></i>
              <span className="text-2xl font-heading font-bold text-white">NayemSolar</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing sustainable solar energy solutions for a brighter and cleaner future.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-secondary transition-colors" aria-label="Facebook">
                <i className="bi bi-facebook text-xl"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-secondary transition-colors" aria-label="Twitter">
                <i className="bi bi-twitter text-xl"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-secondary transition-colors" aria-label="Instagram">
                <i className="bi bi-instagram text-xl"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-secondary transition-colors" aria-label="LinkedIn">
                <i className="bi bi-linkedin text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Residential Solar</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Commercial Solar</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Solar Maintenance</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Energy Consulting</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Battery Storage</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <i className="bi bi-geo-alt-fill text-primary mt-1"></i>
                <span className="text-gray-300">123 Solar Street, Green City, 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="bi bi-telephone-fill text-primary"></i>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="bi bi-envelope-fill text-primary"></i>
                <span className="text-gray-300">info@nayemsolar.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="bi bi-clock-fill text-primary"></i>
                <span className="text-gray-300">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} NayemSolar. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">Designed by WebSparks AI</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
