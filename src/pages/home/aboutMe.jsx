import React from "react"
import Image from "../../images/me.jpg"

const AboutMe = (props) => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={Image} alt="Hero Section" className="Image--Mobile"/>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am graduate of <a href="https://lhr.nu.edu.pk/">FAST-NUCES</a> Lahore. I am currently working as a .NET developer for a year. I also have relevant experience in technologies like Django, Php and ReactJs.
          </p>
          <p className="hero--section-description">
            I have completed many freelance projects and have received a positive response.
          </p>
        </div>
      </div>
    </section>
  )
};

export default AboutMe;
