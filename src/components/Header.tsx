import React, { useState } from 'react'
import Constants from '../Constants'

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="container" style={{height:0}}>
        <nav>
          <div className="nav-brand">
            <a href="index.html">
              <img src="images/code.png" alt="code.png" />
            </a>
          </div>
          <div className={"burger-menu-icon"+(nav?' toggle':'')} onClick={()=>{setNav(!nav);}}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className={"nav-list" + (nav?' active':'')}>
            <li className="nav-item">
              <a href="#landing-page">
                <img src="images/profile-pic.jpg" alt="Siddharth Kumar" className="profile-pic nav-link" />
                <span className="caption nav-link">Siddharth Kumar</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
            <li className="nav-item">
              <a href={Constants.urls.resume} target="_blank" className="nav-link">My Resume</a>
            </li>
            <li className="nav-item social-icons">
            <a href={`mailto:`+Constants.urls.email} className="nav-link">
                <i className="fas fa-envelope-open"></i></a>
              <a href={Constants.urls.github} target="_blank" className="nav-link">
                <i className="fab fa-github"></i></a>
              <a href={Constants.urls.linkedin} target="_blank" className="nav-link">
                <i className="fab fa-linkedin"></i></a>
              <a href={Constants.urls.instagram} target="_blank" className="nav-link">
                <i className="fab fa-instagram"></i></a>
            </li>
            <div className="cta">
              <a href="https://paypal.me/siddharthkumar978?locale.x=en_GB" target="_blank" className="btn nav-link">
                Buy me a coffee
              </a>
            </div>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
