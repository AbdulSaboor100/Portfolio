import React from "react";
import ContactUs from "../../Components/ContactUs/ContactUs";
import MySkill from "../../Components/MySkills/MySkill";
import Service from "../../Components/Service/Service";
import Testimonial from "../../Components/Testimonial/Testimonial";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import WhymeSection from "../../Components/WhymeSection/WhymeSection";
import AppLayout from "../../Layout/AppLayout";
import PortfolioCards from "../../Components/PortfolioCards/PortfolioCards";
import { appData } from "../../MockData/MockData";
import EducationSection from "../../Components/EducationSection/EducationSection";

const Home = () => {
  return (
    <AppLayout data={appData}>
      <HeroHeader />
      <PortfolioSection />
      <Service />
      <EducationSection />
      <WhymeSection />
      <MySkill />
      <Testimonial />
      <ContactUs />
    </AppLayout>
  );
};

export default Home;
