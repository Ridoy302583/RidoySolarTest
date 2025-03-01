import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <i className="bi bi-brightness-high-fill text-secondary text-3xl"></i>
            <span className="text-2xl font-heading font-bold text-primary">NayemSolar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'}>
              About
            </NavLink>
            <NavLink to="/products" className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'}>
              Products
            </NavLink>
            <NavLink to="/services" className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'}>
              Services
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'}>
              Contact
            </NavLink>
            <Link to="/contact" className="btn btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-dark focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 transition-all duration-300">
            <div className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'}
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/products" 
                className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'}
                onClick={() => setIsOpen(false)}
              >
                Products
              </NavLink>
              <NavLink 
                to="/services" 
                className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'}
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
              <Link 
                to="/contact" 
                className="btn btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
