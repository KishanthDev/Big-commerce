import AdOptions from '@/components/advertising/AdOptions'
import CTA from '@/components/advertising/Cta'
import Hero from '@/components/advertising/Hero'
import HowItWorks from '@/components/advertising/HowItWorks'
import ResultsSection from '@/components/advertising/ResultsSection'
import React from 'react'

function page() {
  return (
    <div>
        <Hero/>
        <AdOptions/>
        <HowItWorks/>
        <ResultsSection/>
        <CTA/>
    </div>
  )
}

export default page