import React from 'react'
import './techstack.css'
import Html from "../../assets/HTML.png";
import Css from "../../assets/CSS.png";
import Js from '../../assets/Javascript.svg'
import Tailwind from '../../assets/Tailwind.png';
import Github from "../../assets/github.svg";
import react from "../../assets/react.png";
import Clogo from "../../assets/C.png";
import Chash from "../../assets/C++.png";
import Unity from "../../assets/unity.png";
import Bootstrap from "../../assets/Bootstrap.svg";
import MaterialUI from "../../assets/MaterialUI.svg";
import Git from "../../assets/git.png";
import Blender from "../../assets/blender.png";
import Graphql from "../../assets/Graphql.svg";
import Vercel from "../../assets/Vercel.svg";
import Python from "../../assets/Python.png";
import Blob from "../../assets/blob vector.png";

const Techstack = () => {
    return (
        <section className="skillContainer" id='techStack'>
            <div className="leftSkillContainer">
                <h2 className="skillHeading"><span>M</span>e and <br />MyTech Stack</h2>
                <div className="skillSubHeading">
                    <p>
                        Hi! I'm Anand Kumar Maddheshiya, a second-year B.Tech student at KIET Group of Institutions with specialization in CSE(AI&ML). I completed my 10th and 12th under the CBSE board in Gorakhpur. As a frontend developer,
                        I create responsive and user-friendly web interfaces using HTML, CSS, JavaScript and React. I'm also expanding my skills in C++ and exploring coding and development.
                    </p>
                    <p>
                        I focus on building intuitive and responsive web designs using HTML, CSS, and JavaScript.
                        I'm also exploring full-stack technologies to enhance my skills and create complete digital solutions.
                    </p>
                    <p>
                        I enjoy solving complex problems and collaborating on innovative projects.
                        Staying updated with new trends keeps me motivated to improve and deliver impactful, creative digital solutions.
                    </p>
                </div>
            </div>

            <div className="rightSkillContainer">
                <img src={Blob} className="blobStyle" alt="" />

                <img src={Html} alt="" class="skillsLogo" />
                <img src={Css} alt="" class="skillsLogo" />
                <img src={Js} alt="" class="skillsLogo" />
                <img src={react} alt="" class="skillsLogo" />
                <img src={Clogo} alt="" class="skillsLogo" />
                <img src={Chash} alt="" class="skillsLogo" />
                <img src={Unity} alt="" class="skillsLogo" />
                <img src={Tailwind} alt="" class="skillsLogo" />
                <img src={Bootstrap} alt="" class="skillsLogo" />
                <img src={MaterialUI} alt="" class="skillsLogo" />
                <img src={Git} alt="" class="skillsLogo" />
                <img src={Blender} alt="" class="skillsLogo" />
                <img src={Github} alt="" class="skillsLogo" />
                <img src={Graphql} alt="" class="skillsLogo" />
                <img src={Vercel} alt="" class="skillsLogo" />
                <img src={Python} alt="" class="skillsLogo" />


            </div>
        </section>
    )
}

export default Techstack
