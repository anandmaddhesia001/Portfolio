import React from "react";
import Html from "../../assets/HTML.png";
import Css from "../../assets/CSS.png";
import Js from '../../assets/Javascript.svg'
import Tailwind from '../../assets/Tailwind.png';
import react from "../../assets/react.png";
import Img1 from "../../assets/curreny.png";
import Img2 from '../../assets/leetmetric.png'
import Img3 from '../../assets/password.png'
import "./project.css";

const projects = [
  {
    id: 1,
    title: "Currency Convertor",
    description: "Developed a responsive currency converter web application that converts between multiple international currencies in real-time.",
    image: Img1,
    backgroundImage: Img1, 
    skills: [Html, Css, Js, react],
    appLink: "https://currency-convertor-eight-blush.vercel.app/"
  },
  {
    id: 2,
    title: "LeetMetric",
    description: "Designed a web-based platform to track progress on the competitive platform LeetCode.",
    image: Img2,
    backgroundImage: Img2, 
    skills: [Html, Css, Js],
    appLink: "https://leet-metric-five.vercel.app/"
  },
  {
    id: 3,
    title: "Random Password Generator",
    description: "A random password generator that creates strong, unique passwords by combining letters, numbers, and symbols for enhanced security.",
    image: Img3,
    backgroundImage: Img3, 
    skills: [Html, Tailwind, Js, react],
    appLink: "https://password-generator-git-main-anand-kumar-maddheshiyas-projects.vercel.app/"
  }
];


const Project = () => {
  return (
    <section id="projects" className="projectSection">
      <h2 className="projectTitle">Projects</h2>
      <div className="projectContainer">
        {projects.map((project) => (
          <div
            className="projectCard"
            key={project.id}
            style={{ backgroundImage: project.backgroundImage }}
          >
            <img src={project.image} alt={project.title} />
            <div className="projectNumber">{`0${project.id}`}</div>
            <div className="projectContent">
              <div className="projectSkillsContainer">
                {project.skills.map((skill, index) => (
                  <img
                    key={index}
                    className="projectSkill"
                    src={skill}
                    alt="Skill"
                  />
                ))}
              </div>
              <h2 className="projectHeading">{project.title}</h2>
              <p className="projectSubHeading">{project.description}</p>
              <div className="btnGroup">
                <a href={project.appLink} className="btn btnProject">
                  Visit App
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Project;
