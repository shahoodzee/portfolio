import React from "react"
import HeroSection from "../heroSection";
import MyPortfolio from "../portfolio";
import FooterSection from "../footer";
import SkillSection from "../mySkills";
import AboutMe from "../aboutMe";
import Testimonials from "../testimonials";
import ContactMe from "../contactMe";

const Home = (props) => {
  return (
    <>
      <HeroSection />
      <SkillSection />
      <AboutMe />
      <MyPortfolio />
      <Testimonials />
      <ContactMe />
      <FooterSection />
    </>
  )
};

export default Home;
