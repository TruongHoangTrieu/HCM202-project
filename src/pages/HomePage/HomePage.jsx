import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import KnowledgeSection from "../../components/Knowledge/KnowledgeSection";
import HistoryTimeline from "../../components/HistoryTimeline/HistoryTimeline";
import SupportSection from "../../components/SupportSection/SupportSection";
import GuidelineSection from "../../components/GuidelineSection/GuidelineSection";
import FooterSection from "../../components/FooterSection/FooterSection";
import { visitorService } from "../../services/visitorService";
const HomePage = () => {
  useEffect(() => {
    visitorService.trackVisitor();
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <KnowledgeSection />
        <HistoryTimeline />
        <SupportSection />
        <GuidelineSection />
        <FooterSection />
      </main>
    </>
  );
};

export default HomePage;
