import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import OfferSection from "@/components/sections/OfferSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;