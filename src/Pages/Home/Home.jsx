import React from "react";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";

import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import Service from "../../Components/Service/Service";
import WhymeSection from "../../Components/WhymeSection/WhymeSection";

import MySkill from "../../Components/MySkills/MySkill";

import AppLayout from "../../Layout/AppLayout";
import PortfolioCards from "../../Components/PortfolioCards/PortfolioCards";

const Home = () => {
  return (
    <AppLayout>
      <HeroHeader />
      <Service />
      <WhymeSection />
      <PortfolioSection />
      <MySkill />
        {/* <PortfolioCards  /> */}

   
     
    </AppLayout>
  );
};

export default Home;
