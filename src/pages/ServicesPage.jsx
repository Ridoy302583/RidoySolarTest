import React from 'react'
import { Link } from 'react-router-dom'
import HowItWorks from '../components/HowItWorks'
import Faq from '../components/Faq'

function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Residential Solar Installation",
      description: "Complete solar solutions for homes of all sizes, designed to maximize energy production and savings.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Custom system design",
        "High-efficiency panels",
        "Professional installation",
        "Monitoring system",
        "25-year warranty"
      ]
    },
    {
      id: 2,
      title: "Commercial Solar Solutions",
      description: "Large-scale solar installations for businesses, reducing operating costs and carbon footprint.",
      image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Customized commercial designs",
        "Rooftop or ground-mounted options",
        "Financing solutions",
        "Tax incentive guidance",
        "Ongoing maintenance"
      ]
    },
    {
      id: 3,
      title: "Solar Maintenance & Repair",
      description: "Comprehensive maintenance services to ensure your solar system operates at peak efficiency.",
      image: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Regular system inspections",
        "Panel cleaning",
        "Performance monitoring",
        "Inverter maintenance",
        "Prompt repair service"
      ]
    },
    {
      id: 4,
      title: "Battery Storage Solutions",
      description: "Energy storage systems that allow you to store excess solar power for use when needed.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba53b0998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Lithium-ion battery systems",
        "Backup power during outages",
        "Smart energy management",
        "Scalable capacity",
        "10-year warranty"
      ]
    },
    {
      id: 5,
      title: "Solar Consulting",
      description: "Expert advice on solar energy solutions, helping you make informed decisions for your energy needs.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Energy needs assessment",
        "System sizing recommendations",
        "ROI analysis",
        "Incentive guidance",
        "Technology selection"
      ]
    },
    {
      id: 6,
      title: "Solar System Upgrades",
      description: "Upgrade your existing solar system with the latest technology for improved performance.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        "System assessment",
        "Panel upgrades",
        "Inverter replacement",
        "Battery addition",
        "Monitoring system upgrade"
      ]
    }
  ]

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
              Our <span className="text-secondary">Services</span>
            </h1>
            <p 
              className="text-lg text-gray-300 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Comprehensive solar energy solutions for residential and commercial properties.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="card overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={service.id * 50}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image || "https://placehold.co/800x600/e2e8f0/1e293b?text=Service+Image"} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/800x600/e2e8f0/1e293b?text=Service+Image";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <h4 className="font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="bi bi-check-circle-fill text-primary mr-2 mt-1"></i>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="btn btn-primary w-full">
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Financing Options */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              data-aos="fade-up"
            >
              Financing <span className="text-primary">Options</span>
            </h2>
            <p 
              className="text-gray-600"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We offer flexible financing solutions to make solar energy accessible for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="card p-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="bi bi-cash-coin text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Cash Purchase</h3>
              <p className="text-gray-600 mb-4">
                Own your solar system outright and maximize your long-term savings with a one-time payment.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mr-2 mt-1"></i>
                  <span className="text-gray-600">Maximum long-term savings</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mr-2 mt-1"></i>
                  <span className="text-gray-600">Full tax incentives</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mr-2 mt-1"></i>
                  <span className="text-gray-600">Increased property value</span>
                </li>
              </ul>
            </div>

            <div 
              className="card p-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="bi bi-bank text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Solar Loan</h3>
              <p className="text-gray-600 mb-4">
                Finance your solar system with low monthly payments while still owning the system.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mr-2 mt-1"></i>
                  <span className="text-gray-600">Low interest rates</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mr-2 mt-1"></i>
                  <span className="text-gray-600">$0 down payment options</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mr-2 mt-1"></i>
                  <span className="text-gray-600">Tax incentives available</span>
                </li>
              </ul>
            </div>

            <div 
              className="card p-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="bi bi-house-heart text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Solar Lease/PPA</h3>
              <p className="text-gray-600 mb-4">
                Get solar with no upfront cost and pay only for the power produced.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mr-2 mt-1"></i>
                  <span className="text-gray-600">$0 upfront cost</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mr-2 mt-1"></i>
                  <span className="text-gray-600">Predictable energy costs</span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary mr-2 mt-1"></i>
                  <span className="text-gray-600">Maintenance included</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="btn btn-primary"
              data-aos="fade-up"
            >
              Discuss Financing Options
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              data-aos="fade-right"
            >
              <h2 className="text-3xl font-bold mb-4">Our Service Areas</h2>
              <p className="text-gray-600 mb-6">
                We provide solar installation and maintenance services across the following regions:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-lg mb-3">North Region</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="bi bi-geo-alt-fill text-primary mr-2"></i>
                      <span>Green City</span>
                    </li>
                    <li className="flex items-center">
                      <i className="bi bi-geo-alt-fill text-primary mr-2"></i>
                      <span>Solarville</span>
                    </li>
                    <li className="flex items-center">
                      <i className="bi bi-geo-alt-fill text-primary mr-2"></i>
                      <span>Eco Heights</span>
                    </li>
                    <li className="flex items-center">
                      <i className="bi bi-geo-alt-fill text-primary mr-2"></i>
                      <span>Renewable Ridge</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3">South Region</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="bi bi-geo-alt-fill text-primary mr-2"></i>
                      <span>Sunny Valley</span>
                    </li>
                    <li className="flex items-center">
                      <i className="bi bi-geo-alt-fill text-primary mr-2"></i>
                      <span>Energy Town</span>
                    </li>
                    <li className="flex items-center">
                      <i className="bi bi-geo-alt-fill text-primary mr-2"></i>
                      <span>Solar Springs</span>
                    </li>
                    <li className="flex items-center">
                      <i className="bi bi-geo-alt-fill text-primary mr-2"></i>
                      <span>Sustainable City</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Not in our service area? Contact us anyway - we may be able to accommodate your location.
              </p>
            </div>
            <div
              data-aos="fade-left"
            >
              <img 
                src="https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Service area map" 
                className="rounded-lg shadow-lg w-full"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.src = "https://placehold.co/800x600/e2e8f0/1e293b?text=Service+Areas";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq />

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Ready to Start Your Solar Journey?
          </h2>
          <p 
            className="text-xl text-white/80 max-w-2xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Contact us today for a free consultation and personalized quote.
          </p>
          <Link 
            to="/contact" 
            className="btn bg-white text-primary hover:bg-white/90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
