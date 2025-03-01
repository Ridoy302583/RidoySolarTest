import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import ProductsShowcase from '../components/ProductsShowcase'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import CtaSection from '../components/CtaSection'
import Faq from '../components/Faq'

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ProductsShowcase />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CtaSection />
      <Faq />
    </>
  )
}

export default HomePage
