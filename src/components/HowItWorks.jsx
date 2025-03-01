import React from 'react'

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "We'll assess your energy needs and provide a customized solar solution.",
      icon: "bi-chat-dots-fill"
    },
    {
      number: "02",
      title: "Custom Design",
      description: "Our engineers will design a solar system tailored to your property.",
      icon: "bi-pencil-square"
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Our certified technicians will install your solar system with minimal disruption.",
      icon: "bi-tools"
    },
    {
      number: "04",
      title: "System Activation",
      description: "We'll activate your system and ensure everything is working perfectly.",
      icon: "bi-lightning-charge-fill"
    }
  ]

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            How It <span className="text-primary">Works</span>
          </h2>
          <p 
            className="text-gray-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our simple four-step process makes going solar easy and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 50)}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 -z-10 transform -translate-x-8"></div>
              )}
              
              <div className="card p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 text-white font-bold">
                    <i className={`bi ${step.icon} text-2xl`}></i>
                  </div>
                  <div className="bg-secondary/20 text-secondary font-bold px-3 py-1 rounded-full mb-3">
                    Step {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
