import React from 'react'

function Features() {
  const features = [
    {
      icon: "bi-sun-fill",
      title: "Clean Energy",
      description: "Generate clean, renewable energy from the sun and reduce your carbon footprint."
    },
    {
      icon: "bi-piggy-bank-fill",
      title: "Save Money",
      description: "Reduce or eliminate your electricity bills and protect against rising energy costs."
    },
    {
      icon: "bi-house-fill",
      title: "Increase Home Value",
      description: "Solar installations can increase your property value by up to 4.1% according to recent studies."
    },
    {
      icon: "bi-shield-check",
      title: "Long Warranty",
      description: "Our solar panels come with a 25-year performance warranty for your peace of mind."
    },
    {
      icon: "bi-tools",
      title: "Professional Installation",
      description: "Our certified technicians ensure proper installation and maximum efficiency."
    },
    {
      icon: "bi-lightning-charge-fill",
      title: "Energy Independence",
      description: "Reduce dependence on the grid and take control of your energy production."
    }
  ]

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Why Choose <span className="text-primary">NayemSolar</span>?
          </h2>
          <p 
            className="text-gray-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We provide comprehensive solar solutions with premium quality products and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card p-6 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 50)}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <i className={`bi ${feature.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
