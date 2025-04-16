import React from 'react'
import './about.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const About = () => {
  return (
    <section id="about">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">I am skilled and passionate web designer with experience in ccreating visually appealing and user friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript and React.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Front-End Development</h2>
                    <p>Crafting responsive, visually appealing user interfaces with modern technologies for seamless user experiences.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Back-End Development</h2>
                    <p>Building robust server-side logic, APIs, and databases to ensure high performance and secure functionality.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Problem Solving</h2>
                    <p>Analyzing complex issues and implementing efficient, innovative solutions through logical and structured thinking.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
