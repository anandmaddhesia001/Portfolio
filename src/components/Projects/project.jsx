import React from "react";
import Html from "../../assets/HTML.png";
import Css from "../../assets/CSS.png";
import Js from '../../assets/Javascript.svg'
import Tailwind from '../../assets/Tailwind.png';
import react from "../../assets/react.png";
import Img1 from "../../assets/netflix.png";
import Img2 from '../../assets/leetmetric.png'
import Img3 from '../../assets/password.png'
import "./project.css";

const projects = [
  {
    id: 1,
    title: "Netflix (Clone)",
    description: "Developed functional clones of popular platforms like Netflix and Codeforces to replicate their core feature design.",
    image: Img1,
    backgroundImage: Img1, 
    skills: [Html, Css],
    appLink: "https://your-app-link.com"
  },
  {
    id: 2,
    title: "LeetMetric",
    description: "Designed a web-based platform to track progress on the competitive platform LeetCode.",
    image: Img2,
    backgroundImage: Img2, 
    skills: [Html, Css, Js],
    appLink: "https://your-app-link.com"
  },
  {
    id: 3,
    title: "Random Password Generator",
    description: "A random password generator that creates strong, unique passwords by combining letters, numbers, and symbols for enhanced security.",
    image: Img3,
    backgroundImage: Img3, 
    skills: [Html, Tailwind, Js, react],
    appLink: "https://your-app-link.com"
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
