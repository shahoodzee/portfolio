import React from "react"
import HeroSection from "../heroSection";
import MyPortfolio from "../portfolio";
import FooterSection from "../footer";
import SkillSection from "../mySkills";
import AboutMe from "../aboutMe";
import ContactMe from "../contactMe";
import OtherSkills from "../otherSkills";

const Home = (props) => {
  return (
    <>
      <HeroSection />
      <SkillSection />
      <OtherSkills />
      <AboutMe />
      <MyPortfolio />
      <ContactMe />
      <FooterSection />
    </>
  )
};

export default Home;
