import React from "react";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";
import MySkill from "../../Components/MySkills/MySkill";
import Service from "../../Components/Service/Service";
import AppLayout from "../../Layout/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <HeroHeader />
      <Service />
      <MySkill />
    </AppLayout>
  );
};

export default Home;
