import React from 'react';
import './About.css';
import profileImage from './profile.jpg'; 

const About = () => {
  return (
    <section id="about" className="about">
      <div className="content">
        <h2>About Me</h2>
        <p>
          <i> 
              Hello! I'm Shohrukh Sayfulloev, a passionate and self-taught web developer with a love for creating
              beautiful and functional websites. I have been working as a Content Analyst in Youtube for the past 4 years and recently I have been promoted to Quality Assurance.
              Moreover, I have been very interested in creating websites and it is been 2 years since I started learning the programming language of JavaScript along it's crucial tools such as HTML, CSS,
              React and Node.JS. I am currently sharpening my skills for being a better developer experience. Looking forward to working as a Developer.
          </i>
        </p>
      </div>
      <img src={profileImage} alt="Profile" />
    </section>
  );
};

export default About;