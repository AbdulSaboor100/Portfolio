import React from "react";
import MySkill from "../../Components/MySkills/MySkill";
import Service from "../../Components/Service/Service";
import AppLayout from "../../Layout/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <Service />
      <MySkill />
    </AppLayout>
  );
};

export default Home;
