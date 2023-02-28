import React from "react";
import ContactUs from "../../Components/ContactUs/ContactUs";
import MySkill from "../../Components/MySkills/MySkill";
import Service from "../../Components/Service/Service";
import Testimonial from "../../Components/Testimonial/Testimonial";
import AppLayout from "../../Layout/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <MySkill />
      <Service />
      <Testimonial />
      <ContactUs />
    </AppLayout>
  );
};

export default Home;
