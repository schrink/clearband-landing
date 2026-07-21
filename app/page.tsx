import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { PluginEcosystem } from "@/components/plugin-ecosystem"
import { FeaturesSection } from "@/components/features-section"
import { PrivacyOffline } from "@/components/privacy-offline"
import { UseCasesSection } from "@/components/use-cases-section"
import { GearGallery } from "@/components/gear-gallery"
import { SocialProof } from "@/components/social-proof"
import { PricingSection } from "@/components/pricing-section"
import { TechSpecsSection } from "@/components/tech-specs-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { WaitlistProvider } from "@/components/waitlist-context"
import { WaitlistModal } from "@/components/waitlist-modal"

export default function Home() {
  return (
    <WaitlistProvider>
      <main className="min-h-screen" style={{ backgroundColor: "#0D0900" }}>
        <Navbar />
        <HeroSection />
        <HowItWorks />
        <PluginEcosystem />
        <FeaturesSection />
        <PrivacyOffline />
        <UseCasesSection />
        <GearGallery />
        <SocialProof />
        <PricingSection />
        <TechSpecsSection />
        <Footer />
        <WaitlistModal />
      </main>
    </WaitlistProvider>
  )
}
