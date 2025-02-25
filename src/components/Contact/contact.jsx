import React, { useRef } from 'react'
import "./contact.css"
import Insta from '../../assets/instagram.svg'
import Email from '../../assets/email.png'
import Linkedin from '../../assets/linkedin.svg'
import Git from '../../assets/github.svg'
import { Link } from 'react-scroll'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ppvvaeu', 'template_nypploa', form.current, {
            publicKey: 'YuxmO2qjf3Fd3_XIm',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email sent');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <div className="contactPage" id='contact'>
            <div className="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc"></span>
                <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' name='from_name'/>
                    <input type="text" className='email' placeholder='Your E-mail' name='your_email'/>
                    <textarea className='msg' placeholder='Your Message' name='message' rows='5' />
                    <button type='submit' value='Sendend' className='submitBtn'>Submit</button>
                </form>
            </div>
            <footer>
                <div className="leftFoot">
                    <div className="footerMenu">
                        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={800} className='footerMenuListItem'>Home</Link>
                        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-75} duration={800} className='footerMenuListItem'>About</Link>
                        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='footerMenuListItem'>Projects</Link>
                        <Link activeClass='active' to='techStack' spy={true} smooth={true} offset={-100} duration={500} className='footerMenuListItem'>Skills</Link>
                    </div>
                    <h1>Anand Kumar Maddheshiya</h1>
                </div>
                <div className="rightFoot">
                    <img src={Linkedin} alt="Linkedin" className='iconImg' />
                    <img src={Git} alt="Github" className='iconImg' />
                    <img src={Insta} alt="Instagram" className='iconImg' />
                    <img src={Email} alt="Email" className='iconImg' />
                </div>
            </footer>
        </div>
    )
}

export default Contact
