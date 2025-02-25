import React from 'react'
import './intro.css'
import bg from '../../assets/Anand.jpg'
import btnImg from '../../assets/hireme.png'
import Insta from '../../assets/instagram.svg'
import Email from '../../assets/email.png'
import Linkedin from '../../assets/linkedin.svg'
import Git from '../../assets/github.svg'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
      <div className='profileImg'>
      <img src={bg} alt="profile" className='img' />
      </div>
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Anand</span>
          <div class="heading subHeading">
            I am a <span class="role">Web Devloper</span>
          </div>
        </span>
        <p className="introPara">I am a skilled and passionate web designer with experience in creating <br /> visually appealing and user-friendly websites.</p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/anand-kumar-maddheshiya-326923294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={Linkedin} alt="Linkedin" className='iconImg' /></a>
          <a href="https://github.com/anandmaddhesia001"><img src={Git} alt="Github" className='iconImg' /></a>
          <a href="https://www.instagram.com/__anand_maddheshiya/"><img src={Insta} alt="Instagram" className='iconImg' /></a>
          <a href="mailto:ak4889836@gmail.com?subject=Hello&body=This%20is%20a%20test%20email."><img src={Email} alt="Email" className='iconImg' /></a>
        </div>
        <a href="https://drive.google.com/file/d/1OG024eEAR-mtxioPGeS4obP5joeNK0Xl/view?usp=sharing" download >
          <button className='downloadBtn'>Download Resume</button>
        </a>
      </div>
      
    </section>
  )
}

export default Intro
