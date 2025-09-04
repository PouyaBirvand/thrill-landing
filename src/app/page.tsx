import Container from "@/components/common/Container";
import Header from "@/components/header/Header";
import CommissionPlanSection from "@/components/sections/commission/CommissionPlanSection";
import FeatureSlider from "@/components/sections/features/FeatureSlider";
import FeaturesSection from "@/components/sections/features/FeaturesSection";
import HeroSection from "@/components/sections/hero/HeroSection";
import AffiliateSignupForm from "@/components/sections/signup/SignUpSection";
import StepsSection from "@/components/sections/steps/StepsSection";
import CursorSpotlight from "@/components/ui/CursorSpotlightDots";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <CursorSpotlight />
      </div>

      <div className="relative z-10">
        <Container>
          <Header />
        </Container>

        <HeroSection />

        <Container className="relative z-10">          
          <FeaturesSection />
          <FeatureSlider />
          <StepsSection />
          <AffiliateSignupForm />
          <CommissionPlanSection />
        </Container>
      </div>
    </div>
  );
}