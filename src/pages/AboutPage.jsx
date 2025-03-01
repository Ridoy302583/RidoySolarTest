import React from 'react'
import { Link } from 'react-router-dom'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'

function AboutPage() {
  const teamMembers = [
    {
      name: "Ahmed Nayem",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      bio: "With over 15 years of experience in renewable energy, Ahmed founded NayemSolar with a vision to make solar energy accessible to everyone."
    },
    {
      name: "Jessica Williams",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      bio: "Jessica leads our technical team, ensuring all installations meet the highest standards of quality and efficiency."
    },
    {
      name: "David Chen",
      role: "Sales Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      bio: "David has helped hundreds of homeowners and businesses make the switch to solar energy with his consultative approach."
    },
    {
      name: "Sophia Rodriguez",
      role: "Customer Success",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      bio: "Sophia ensures our customers have an exceptional experience from initial consultation through installation and beyond."
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
              About <span className="text-secondary">NayemSolar</span>
            </h1>
            <p 
              className="text-lg text-gray-300 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We're on a mission to accelerate the world's transition to sustainable energy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              data-aos="fade-right"
            >
              <img 
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="NayemSolar founding team" 
                className="rounded-lg shadow-lg w-full"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.src = "https://placehold.co/800x600/e2e8f0/1e293b?text=Our+Story";
                }}
              />
            </div>
            <div
              data-aos="fade-left"
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, NayemSolar began with a simple mission: to make clean, renewable solar energy accessible and affordable for everyone. Our founder, Ahmed Nayem, saw the potential for solar energy to transform how we power our homes and businesses while reducing our environmental impact.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of passionate engineers has grown into a leading solar energy provider with over 1,500 successful installations across the country. We've built our reputation on quality workmanship, exceptional customer service, and a genuine commitment to sustainability.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we continue to innovate and expand our offerings, helping more people harness the power of the sun while reducing their carbon footprint and energy costs.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                  <span className="font-medium">Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                  <span className="font-medium">Certified Technicians</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                  <span className="font-medium">Sustainable Practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              data-aos="fade-up"
            >
              Our <span className="text-primary">Values</span>
            </h2>
            <p 
              className="text-gray-600"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              These core principles guide everything we do at NayemSolar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="card p-8 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-lightbulb-fill text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek new technologies and approaches to improve solar energy efficiency and accessibility.
              </p>
            </div>

            <div 
              className="card p-8 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-shield-check text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our dealings with customers, partners, and employees.
              </p>
            </div>

            <div 
              className="card p-8 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-tree-fill text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmental stewardship and reducing carbon emissions through renewable energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Our Team */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              data-aos="fade-up"
            >
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p 
              className="text-gray-600"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              The passionate professionals behind NayemSolar's success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="card overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={100 + (index * 50)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image || "https://placehold.co/400x400/e2e8f0/1e293b?text=Team+Member"} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/400x400/e2e8f0/1e293b?text=Team+Member";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Ready to Join the Solar Revolution?
          </h2>
          <p 
            className="text-xl text-white/80 max-w-2xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Contact us today to learn how we can help you harness the power of solar energy.
          </p>
          <Link 
            to="/contact" 
            className="btn bg-white text-primary hover:bg-white/90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}

export default AboutPage
