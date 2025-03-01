import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-dark to-dark/90 text-white pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt="Solar panels on a sunny day" 
          className="w-full h-full object-cover opacity-30"
          crossOrigin="anonymous"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            data-aos="fade-up"
          >
            Harness the Power of <span className="text-secondary">Solar Energy</span>
          </h1>
          <p 
            className="text-lg md:text-xl mb-8 text-gray-200"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            NayemSolar provides high-quality solar solutions for homes and businesses. 
            Save money on electricity bills while contributing to a sustainable future.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <Link to="/contact" className="btn btn-primary">
              Get Free Consultation
            </Link>
            <Link to="/products" className="btn btn-outline border-white text-white hover:bg-white hover:text-dark">
              Explore Products
            </Link>
          </div>
          
          <div 
            className="mt-12 flex flex-wrap gap-6 md:gap-10"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <div className="flex items-center gap-2">
              <i className="bi bi-check-circle-fill text-secondary text-xl"></i>
              <span>Premium Quality Panels</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="bi bi-check-circle-fill text-secondary text-xl"></i>
              <span>25-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="bi bi-check-circle-fill text-secondary text-xl"></i>
              <span>Professional Installation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
