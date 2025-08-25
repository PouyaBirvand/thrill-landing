import Container from "@/components/common/Container";
import Header from "@/components/header/Header";
import FeaturesSection from "@/components/sections/features/FeaturesSection";
import HeroSection from "@/components/sections/hero/HeroSection";
// import AffiliateSteps from "@/components/sections/steps/StepsSection";

export default function Home() {
  return (
    <div className="bg-body min-h-screen h-[999vh]">
      <Container>
        <Header />
      </Container>
      <HeroSection />
      <Container>
        <FeaturesSection />
      </Container>
    </div>
  );
}
