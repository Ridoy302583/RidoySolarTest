import React from 'react'
import { Link } from 'react-router-dom'

function ProductsShowcase() {
  const products = [
    {
      id: 1,
      name: "Premium Solar Panels",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "High-efficiency monocrystalline solar panels with 22% conversion efficiency.",
      price: "From $250/panel"
    },
    {
      id: 2,
      name: "Solar Inverters",
      image: "https://images.unsplash.com/photo-1559302995-f62d5ff3f64e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Smart inverters that convert DC to AC power with 97% efficiency.",
      price: "From $1,200"
    },
    {
      id: 3,
      name: "Battery Storage",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba53b0998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Lithium-ion battery systems for storing excess solar energy.",
      price: "From $3,500"
    }
  ]

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Our Featured <span className="text-primary">Products</span>
          </h2>
          <p 
            className="text-gray-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We offer a wide range of high-quality solar products to meet your energy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="card overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={100 + (product.id * 50)}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image || "https://placehold.co/600x400/e2e8f0/1e293b?text=Product+Image"} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x400/e2e8f0/1e293b?text=Product+Image";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary">{product.price}</span>
                  <Link to="/products" className="text-primary hover:text-primary/80 font-medium flex items-center">
                    View Details
                    <i className="bi bi-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="btn btn-outline"
            data-aos="fade-up"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsShowcase
