import React from "react";
import ContactUs from "../../Components/ContactUs/ContactUs";
import MySkill from "../../Components/MySkills/MySkill";
import Service from "../../Components/Service/Service";
import Testimonial from "../../Components/Testimonial/Testimonial";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import WhymeSection from "../../Components/WhymeSection/WhymeSection";
import AppLayout from "../../Layout/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <HeroHeader />
      <Service />
      <WhymeSection />
      <PortfolioSection />
      <MySkill />
      <Service />
      <Testimonial />
      <ContactUs />
    </AppLayout>
  );
};

export default Home;
