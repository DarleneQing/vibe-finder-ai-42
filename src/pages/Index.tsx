import HeroSection from "@/components/HeroSection";
import PipelineSection from "@/components/PipelineSection";
import ResultCardsSection from "@/components/ResultCardsSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PipelineSection />
      <ResultCardsSection />
      <AppPreviewSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
};

export default Index;
