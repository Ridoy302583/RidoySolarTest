import React, { useState } from 'react'

function Faq() {
  const faqs = [
    {
      question: "How much does a solar system cost?",
      answer: "The cost of a solar system depends on various factors including the size of your property, energy needs, and the type of equipment. On average, residential systems range from $15,000 to $25,000 before incentives. We provide free consultations to give you an accurate quote based on your specific requirements."
    },
    {
      question: "How long does the installation process take?",
      answer: "A typical residential installation takes 1-3 days, while commercial projects may take 1-2 weeks. The entire process from signing the contract to system activation usually takes 2-3 months, including permit approvals and utility connections."
    },
    {
      question: "What maintenance is required for solar panels?",
      answer: "Solar panels require minimal maintenance. Occasional cleaning to remove dust and debris is recommended, typically 1-2 times per year. We offer maintenance packages that include regular inspections, cleaning, and performance monitoring to ensure optimal efficiency."
    },
    {
      question: "Do solar panels work during power outages?",
      answer: "Standard grid-tied solar systems will shut down during a power outage for safety reasons. However, systems with battery backup can continue to provide power during outages. We offer various battery storage solutions that can keep essential appliances running when the grid is down."
    },
    {
      question: "What incentives and tax credits are available?",
      answer: "There are various incentives available including the federal Investment Tax Credit (ITC), which allows you to deduct 26% of the cost of installing a solar energy system from your federal taxes. Additional state and local incentives may also be available. Our team can help you navigate these incentives to maximize your savings."
    },
    {
      question: "How long do solar panels last?",
      answer: "Most solar panels come with a 25-30 year warranty and can continue producing electricity for even longer. The efficiency may decrease slightly over time (about 0.5% per year), but quality panels can still operate at 80-85% efficiency after 25 years."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p 
            className="text-gray-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Find answers to common questions about solar energy and our services.
          </p>
        </div>

        <div 
          className="max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <i className={`bi ${openIndex === index ? 'bi-dash' : 'bi-plus'} text-primary text-xl`}></i>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 p-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
