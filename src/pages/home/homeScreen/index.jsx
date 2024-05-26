import React from "react"
import HeroSection from "../heroSection";
import MyPortfolio from "../portfolio";
import FooterSection from "../footer";
import SkillSection from "../mySkills";
import AboutMe from "../aboutMe";
import ContactMe from "../contactMe";

const Home = (props) => {
  return (
    <>
      <HeroSection />
      <SkillSection />
      <AboutMe />
      <MyPortfolio />
      <ContactMe />
      <FooterSection />
    </>
  )
};

export default Home;
