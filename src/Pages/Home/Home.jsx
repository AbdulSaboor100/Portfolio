import React from "react";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import Service from "../../Components/Service/Service";
import WhymeSection from "../../Components/WhymeSection/WhymeSection";
import MySkill from "../../Components/MySkills/MySkill";
import AppLayout from "../../Layout/AppLayout";
import { appData } from "../../MockData/MockData";

const Home = () => {
  return (
    <AppLayout data={appData}>
      <HeroHeader />
      <Service />
      <WhymeSection />
      <PortfolioSection />
      <MySkill />
    </AppLayout>
  );
};

export default Home;
