import React, { useEffect } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { visitorService } from "../../services/visitorService";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import QuoteSection from "../../components/QuoteSection/QuoteSection";
const HomePage = () => {
  useEffect(() => {
    visitorService.trackVisitor();
  }, []);
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        <QuoteSection />
      </main>
    </>
  );
};

export default HomePage;
