import React from 'react'

function Stats() {
  const stats = [
    {
      value: "1,500+",
      label: "Installations",
      icon: "bi-house-fill"
    },
    {
      value: "25,000+",
      label: "kW Installed",
      icon: "bi-lightning-charge-fill"
    },
    {
      value: "98%",
      label: "Customer Satisfaction",
      icon: "bi-emoji-smile-fill"
    },
    {
      value: "15,000+",
      label: "Tons of CO₂ Saved",
      icon: "bi-tree-fill"
    }
  ]

  return (
    <section className="py-12 bg-dark text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                <i className={`bi ${stat.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
