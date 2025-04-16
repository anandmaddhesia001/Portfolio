import React, { useEffect, useState } from 'react';
import './intro.css';
import bg from '../../assets/Anand.jpg';
import dots from '../../assets/dots.png';
import cube from '../../assets/cube.png';
import circle from '../../assets/circle.png';
import zigzags from '../../assets/zigzags.png';
import plus from '../../assets/plus.png';
import Insta from '../../assets/instagram.svg';
import Email from '../../assets/email.png';
import Linkedin from '../../assets/linkedin.svg';
import Git from '../../assets/github.svg';

const Intro = () => {
  const roles = ["Full Stack Developer", "Front End Developer", "Backend Developer"];
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);  // Track typing state

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    // Typing animation logic
    if (isTyping) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100); // Adjust speed of typing here
    } else {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50); // Adjust speed of deleting here
    }

    if (charIndex === currentRole.length && isTyping) {
      // Pause after typing the role, then start deleting after 1 second
      setTimeout(() => {
        setIsTyping(false); // Start deleting
      }, 1000);
    } else if (charIndex === 0 && !isTyping) {
      // Switch to next role after deleting
      setIsTyping(true);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout); // Cleanup timeout to avoid memory leaks
  }, [charIndex, isTyping, roleIndex]);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Anand Kumar</span>
          <div className="heading subHeading">
            A <span className="role">{text}<span className="cursor">|</span></span>
          </div>
        </span>
        <p className="introPara">
          I am a skilled and passionate web designer with experience in creating 
          visually appealing and user-friendly websites.
        </p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/anand-kumar-maddheshiya-326923294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={Linkedin} alt="Linkedin" className='iconImg' /></a>
          <a href="https://github.com/anandmaddhesia001"><img src={Git} alt="Github" className='iconImg' /></a>
          <a href="https://www.instagram.com/__anand_maddheshiya/"><img src={Insta} alt="Instagram" className='iconImg' /></a>
          <a href="mailto:ak4889836@gmail.com?subject=Hello&body=This%20is%20a%20test%20email."><img src={Email} alt="Email" className='iconImg' /></a>
        </div>
        <a href="https://drive.google.com/file/d/1OG024eEAR-mtxioPGeS4obP5joeNK0Xl/view?usp=sharing" download>
          <button className='downloadBtn'>Download Resume</button>
        </a>
      </div>

      <div className="imgContainer">
        <div className="absolute icons iconDots"><img src={dots} alt="" /></div>
        <div className="absolute icons icon-cube"><img src={cube} alt="" /></div>
        <div className="absolute icons icon-circle"><img src={circle} alt="" /></div>
        <div className="absolute icons iconZigZag"><img src={zigzags} alt="" /></div>
        <div className="absolute icons icon-plus"><img src={plus} alt="" /></div>
        <div className="userImage"><img src={bg} className="u-img" /></div>
      </div>
    </section>
  );
};

export default Intro;
