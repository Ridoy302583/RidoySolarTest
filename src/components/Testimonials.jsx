import React, { useState } from 'react'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "NayemSolar transformed our home energy consumption. We're saving over $200 monthly on electricity bills, and the installation was quick and professional. Highly recommend their services!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "As a small business owner, I was looking for ways to reduce overhead costs. NayemSolar provided an excellent commercial solar solution that has cut our energy expenses by 70%. The ROI has been impressive!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Architect",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "I've worked with several solar companies for my clients, and NayemSolar stands out for their attention to detail and quality of products. Their team is knowledgeable and always delivers on time."
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section bg-primary text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            What Our <span className="text-secondary">Clients Say</span>
          </h2>
          <p 
            className="text-white/80"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>

        <div 
          className="max-w-4xl mx-auto relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-white text-dark rounded-lg p-8 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image || "https://placehold.co/200x200/e2e8f0/1e293b?text=Person"} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/200x200/e2e8f0/1e293b?text=Person";
                  }}
                />
              </div>
              <div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-secondary text-xl mr-1"></i>
                  ))}
                </div>
                <blockquote className="text-lg italic mb-6">"{testimonials[activeIndex].quote}"</blockquote>
                <div>
                  <h4 className="font-bold text-xl">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <i className="bi bi-arrow-left-short text-2xl"></i>
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <i className="bi bi-arrow-right-short text-2xl"></i>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-secondary' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
