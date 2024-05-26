import React from "react"
import Image from "../../images/me.jpg"

const HeroSection = (props) => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">

            {/* STYLISH CONTENT */}
            <div class="stylish__container">
              <div class="stylish__content">
                <div class="stylish__content__container">
                  <p class="stylish__content__container__text">
                    Hey, I
                  </p>
                
                  <ul class="stylish__content__container__list">
                    <li class="stylish__content__container__list__item">Decide</li>
                    <li class="stylish__content__container__list__item">Design</li>
                    <li class="stylish__content__container__list__item">Develop</li>
                    <li class="stylish__content__container__list__item">Deploy</li>
                  </ul>
                </div>
              </div>
            </div>
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Hey, Iam Shahood</span>{" "}
            <br />
            Full Stack Developer
          </h1>
          <p className="hero--section-description">
            I am full Stack Developer working in the areas of 
            <br /> Software Development, Artificial Intelligence and Blockchain
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src={Image} alt="Hero Section"/>
      </div>
    </section>
  );
};

export default HeroSection;
