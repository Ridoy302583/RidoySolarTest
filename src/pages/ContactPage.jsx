import React from 'react'
import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-white pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-up"
            >
              Contact <span className="text-secondary">Us</span>
            </h1>
            <p 
              className="text-lg text-gray-300 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Have questions or ready to start your solar journey? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              data-aos="fade-right"
            >
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours. We're here to answer any questions you have about our solar solutions.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="bi bi-geo-alt-fill text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Solar Street, Green City, 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="bi bi-telephone-fill text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="bi bi-envelope-fill text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Address</h3>
                    <p className="text-gray-600">info@nayemsolar.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="bi bi-clock-fill text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://twitter.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="https://instagram.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://linkedin.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div
              data-aos="fade-left"
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50 pt-0">
        <div className="container">
          <div 
            className="bg-white rounded-lg shadow-lg p-4 mb-8"
            data-aos="fade-up"
          >
            <div className="aspect-w-16 aspect-h-9 h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Location map" 
                className="w-full h-full object-cover rounded"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.src = "https://placehold.co/1200x600/e2e8f0/1e293b?text=Map";
                }}
              />
            </div>
          </div>
          
          <div 
            className="text-center max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold mb-4">Visit Our Showroom</h2>
            <p className="text-gray-600 mb-6">
              Come see our solar products in person and speak with our experts. Our showroom features working demonstrations of our solar panels, inverters, and battery systems.
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 
              className="text-3xl font-bold mb-4"
              data-aos="fade-up"
            >
              Frequently Asked Questions
            </h2>
            <p 
              className="text-gray-600"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Quick answers to common questions about contacting us.
            </p>
          </div>
          
          <div 
            className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">How quickly will you respond to my inquiry?</h3>
              <p className="text-gray-600">We typically respond to all inquiries within 24 business hours.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">Do I need to make an appointment to visit your showroom?</h3>
              <p className="text-gray-600">While walk-ins are welcome, we recommend scheduling an appointment to ensure a consultant is available to assist you.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">Can I get a quote without an in-home assessment?</h3>
              <p className="text-gray-600">We can provide a preliminary estimate based on your energy usage and location, but a final quote requires an in-person assessment.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">Do you offer virtual consultations?</h3>
              <p className="text-gray-600">Yes, we offer video consultations for customers who prefer not to meet in person initially.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Ready to Harness the Power of the Sun?
          </h2>
          <p 
            className="text-xl text-white/80 max-w-2xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Take the first step towards energy independence and sustainability today.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a href="tel:+15551234567" className="btn bg-white text-primary hover:bg-white/90">
              <i className="bi bi-telephone-fill mr-2"></i>
              Call Us Now
            </a>
            <a href="mailto:info@nayemsolar.com" className="btn bg-secondary text-dark hover:bg-secondary/90">
              <i className="bi bi-envelope-fill mr-2"></i>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
