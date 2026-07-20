import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { GearGallery } from "@/components/gear-gallery"
import { SocialProof } from "@/components/social-proof"
import { PricingSection } from "@/components/pricing-section"
import { TechSpecsSection } from "@/components/tech-specs-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0D0900" }}>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <UseCasesSection />
      <GearGallery />
      <SocialProof />
      <PricingSection />
      <TechSpecsSection />
      <Footer />
    </main>
  )
}
