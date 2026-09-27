import Hero from '../components/Hero'
import StatsBanner from '../components/StatsBanner'
import TestimonialsSection from '../components/TestimonialsSection'
import PlacedCompanies from '../components/PlacedCompanies'
import CTA from '../components/CTA'
// Note: Some of these will need to be customized to exactly match the image,
// such as the 'Our Popular Courses', 'For Colleges & Institutions', and 'Latest from Our Blog' sections.

export default function Home() {
  return (
    <>
      <Hero />
      {/* TODO: Add 'Partners Logo Strip' section exactly like the image */}
      
      {/* TODO: Add 'Our Popular Courses' section */}
      
      {/* TODO: Add 'For Colleges & Institutions' and 'Our Services' grid */}
      
      <StatsBanner />
      
      <TestimonialsSection />
      
      {/* Matches 'Our College Partners' in the image */}
      <PlacedCompanies /> 
      
      {/* Matches 'Ready to Upgrade Your Skills?' in the image */}
      <CTA />
      
      {/* TODO: Add 'Latest from Our Blog' section */}
    </>
  )
}
