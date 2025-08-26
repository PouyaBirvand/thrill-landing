import Container from "@/components/common/Container"
import Header from "@/components/header/Header"
import FeatureSlider from "@/components/sections/features/FeatureSlider"
import FeaturesSection from "@/components/sections/features/FeaturesSection"
import HeroSection from "@/components/sections/hero/HeroSection"
import AffiliateSignupForm from "@/components/sections/signup/SignUpSection"
import StepsSection from "@/components/sections/steps/StepsSection"

export default function Home() {
  return (
    <div className="bg-body min-h-screen pb-20 overflow-x-hidden">
      <Container>
        <Header />
      </Container>
      <HeroSection />
      <Container>
        <FeaturesSection />
        <FeatureSlider />
        <StepsSection/>
        <AffiliateSignupForm/>
      </Container>
    </div>
  )
}
