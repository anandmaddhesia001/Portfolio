import React, { useState } from 'react'
import './navbar.css'
import contactImg from '../../assets/contact.png'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <img src={logo} alt="logo" className='logo'/>
        <div className="destopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuListItem'>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-75} duration={500} className='destopMenuListItem'>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuListItem'>Projects</Link>
            <Link activeClass='active' to='techStack' spy={true} smooth={true} offset={-100} duration={800} className='destopMenuListItem'>Skills</Link>
        </div>
        <button className="destopMenuBtn" onClick={()=>{
              document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }} >
            <img src={contactImg} alt="" className='destopMenuImg' />Contact Me
        </button>
        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-75} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='techStack' spy={true} smooth={true} offset={-100} duration={800} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={800} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
