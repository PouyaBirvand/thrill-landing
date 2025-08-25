import Container from "@/components/common/Container"
import Header from "@/components/header/Header"
import FeatureSlider from "@/components/sections/features/FeatureSlider"
import FeaturesSection from "@/components/sections/features/FeaturesSection"
import HeroSection from "@/components/sections/hero/HeroSection"

export default function Home() {
  return (
    <div className="bg-body min-h-screen pb-20">
      <Container>
        <Header />
      </Container>
      <HeroSection />
      <Container>
        <FeaturesSection />
      </Container>
      <Container>
        <FeatureSlider />
      </Container>
    </div>
  )
}
