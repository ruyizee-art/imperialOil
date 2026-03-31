import React from "react";
import "@/App.css";
import AlertBanner from "@/components/AlertBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StockTicker from "@/components/StockTicker";
import MissionSection from "@/components/MissionSection";
import KeyTopics from "@/components/KeyTopics";
import Stories from "@/components/Stories";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function App() {
  return (
    <div className="App">
      <AlertBanner />
      <Header />
      <main>
        <HeroSection />
        <StockTicker />
        <MissionSection />
        <KeyTopics />
        <Stories />
        <InfoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
