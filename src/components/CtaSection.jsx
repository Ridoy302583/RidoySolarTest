import React from 'react'
import { Link } from 'react-router-dom'

function CtaSection() {
  return (
    <section className="section bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/10 -z-10"></div>
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-secondary/10 -z-10"></div>
      
      <div className="container">
        <div 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Switch to <span className="text-primary">Solar Energy</span>?
              </h2>
              <p className="text-gray-600 mb-6">
                Take the first step towards energy independence and sustainability. 
                Get a free consultation and quote for your solar installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Get Free Quote
                </Link>
                <Link to="/products" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
              
              <div className="mt-8">
                <p className="font-medium mb-2">Or call us directly:</p>
                <a href="tel:+15551234567" className="text-xl font-bold text-primary flex items-center">
                  <i className="bi bi-telephone-fill mr-2"></i>
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611365892117-bce8d35092c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Solar installation on a house roof" 
                className="rounded-lg shadow-lg w-full"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.src = "https://placehold.co/800x600/e2e8f0/1e293b?text=Solar+Installation";
                }}
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-dark font-bold py-3 px-6 rounded-lg shadow-lg">
                Save up to 70% on energy bills!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
