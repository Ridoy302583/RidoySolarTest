import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ProductsPage() {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'panels', name: 'Solar Panels' },
    { id: 'inverters', name: 'Inverters' },
    { id: 'batteries', name: 'Battery Storage' },
    { id: 'accessories', name: 'Accessories' }
  ]

  const products = [
    {
      id: 1,
      name: "NayemSolar Premium Panel",
      category: "panels",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "High-efficiency monocrystalline solar panel with 22% conversion efficiency.",
      price: "$250/panel",
      features: [
        "400W output",
        "22% efficiency",
        "25-year warranty",
        "Anti-reflective coating",
        "Weather-resistant"
      ]
    },
    {
      id: 2,
      name: "NayemSolar Economy Panel",
      category: "panels",
      image: "https://images.unsplash.com/photo-1611365892117-bce8d35092c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Cost-effective polycrystalline solar panel for budget-conscious customers.",
      price: "$180/panel",
      features: [
        "330W output",
        "18% efficiency",
        "20-year warranty",
        "Durable construction",
        "Easy installation"
      ]
    },
    {
      id: 3,
      name: "NayemSolar Smart Inverter",
      category: "inverters",
      image: "https://images.unsplash.com/photo-1559302995-f62d5ff3f64e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Smart inverter that converts DC to AC power with 97% efficiency.",
      price: "$1,200",
      features: [
        "5kW capacity",
        "97% efficiency",
        "Wi-Fi connectivity",
        "Mobile app monitoring",
        "10-year warranty"
      ]
    },
    {
      id: 4,
      name: "NayemSolar Micro Inverter",
      category: "inverters",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Micro inverter for individual panel optimization and maximum energy harvest.",
      price: "$180/unit",
      features: [
        "Per-panel optimization",
        "96% efficiency",
        "Shade tolerance",
        "Panel-level monitoring",
        "15-year warranty"
      ]
    },
    {
      id: 5,
      name: "NayemSolar Home Battery",
      category: "batteries",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba53b0998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Lithium-ion battery system for storing excess solar energy.",
      price: "$3,500",
      features: [
        "10kWh capacity",
        "5kW output",
        "90% round-trip efficiency",
        "10-year warranty",
        "Smart energy management"
      ]
    },
    {
      id: 6,
      name: "NayemSolar Mounting System",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Durable aluminum mounting system for secure panel installation.",
      price: "$120/set",
      features: [
        "Corrosion-resistant aluminum",
        "Easy installation",
        "Adjustable tilt",
        "Wind-resistant design",
        "20-year warranty"
      ]
    },
    {
      id: 7,
      name: "NayemSolar Monitoring System",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Real-time monitoring system for tracking solar energy production.",
      price: "$250",
      features: [
        "Real-time data",
        "Mobile app access",
        "Energy consumption tracking",
        "Performance alerts",
        "5-year warranty"
      ]
    },
    {
      id: 8,
      name: "NayemSolar Commercial Battery",
      category: "batteries",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "High-capacity battery system for commercial applications.",
      price: "$12,000",
      features: [
        "50kWh capacity",
        "20kW output",
        "Scalable design",
        "Advanced BMS",
        "10-year warranty"
      ]
    }
  ]

  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              Our <span className="text-secondary">Products</span>
            </h1>
            <p 
              className="text-lg text-gray-300 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Explore our range of high-quality solar products designed for efficiency and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-white">
        <div className="container">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div className="relative max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="bi bi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div 
                  key={product.id} 
                  className="card overflow-hidden"
                  data-aos="fade-up"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={product.image || "https://placehold.co/800x600/e2e8f0/1e293b?text=Product+Image"} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        e.target.src = "https://placehold.co/800x600/e2e8f0/1e293b?text=Product+Image";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <i className="bi bi-check-circle-fill text-primary mr-2 mt-1"></i>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary text-lg">{product.price}</span>
                      <Link to="/contact" className="btn btn-primary">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="bi bi-search text-gray-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">No Products Found</h3>
              <p className="text-gray-600 mb-4">We couldn't find any products matching your criteria.</p>
              <button 
                className="btn btn-outline"
                onClick={() => {
                  setActiveCategory('all')
                  setSearchTerm('')
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              data-aos="fade-right"
            >
              <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-600 mb-4">
                We understand that every home and business has unique energy needs. Our team of experts can design a custom solar solution tailored to your specific requirements and budget.
              </p>
              <p className="text-gray-600 mb-6">
                From residential installations to large commercial projects, we have the expertise to deliver high-performance solar systems that maximize your energy production and savings.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Request Custom Quote
              </Link>
            </div>
            <div
              data-aos="fade-left"
            >
              <img 
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Custom solar installation" 
                className="rounded-lg shadow-lg w-full"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.src = "https://placehold.co/800x600/e2e8f0/1e293b?text=Custom+Solutions";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Warranty */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              data-aos="fade-right"
            >
              <img 
                src="https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Solar panel warranty" 
                className="rounded-lg shadow-lg w-full"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.src = "https://placehold.co/800x600/0F9D58/ffffff?text=Warranty";
                }}
              />
            </div>
            <div
              data-aos="fade-left"
            >
              <h2 className="text-3xl font-bold mb-4">Our Warranty Promise</h2>
              <p className="text-white/80 mb-6">
                We stand behind the quality of our products with industry-leading warranties:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="bi bi-shield-check text-secondary text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-lg">25-Year Performance Warranty</h4>
                    <p className="text-white/80">Our solar panels are guaranteed to produce at least 80% of their rated power after 25 years.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-shield-check text-secondary text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-lg">10-Year Product Warranty</h4>
                    <p className="text-white/80">All our products are covered against manufacturing defects for 10 years.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-shield-check text-secondary text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-lg">5-Year Installation Warranty</h4>
                    <p className="text-white/80">Our workmanship is guaranteed for 5 years, giving you peace of mind.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container">
          <div 
            className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our experts will help you find the perfect solar solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary">
                Get a Free Quote
              </Link>
              <Link to="/services" className="btn btn-outline">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsPage
