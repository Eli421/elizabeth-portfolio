import React from 'react'
import phone from '../../assets/img/contact_phone.png';
import email from '../../assets/img/contact_email.png';
import github from '../../assets/img/contact_github.png';
import linkedin from '../../assets/img/contact_linkedin.png';
import { NavLink } from 'react-router-dom';
import {social} from '../../data';

import './navbar.scss';

export const Navbar = () => {
  return (
    <nav className='menu'>
        <div className="menu__content container">
            <ul className='social'>
                <li className='social__item'><a href="+506 87014577"><img src={phone} alt="phone icon" /></a></li>
                <li className='social__item'><a href="elizabethcorrales421@gmail.com"><img src={email} alt="email icon" /></a></li>
                <li className='social__item'><a href="https://github.com/Eli421"><img src={github} alt="github icon" /></a></li>
                <li className='social__item'><a href="https://www.linkedin.com/in/elizabeth-corrales-salazar-88280b199/"><img src={linkedin} alt="linkedin icon" /></a></li>
            </ul>
            <ul className='menu__navigation'>
                <NavLink 
                    to="/"
                    className={({isActive}) => `navigation__item ${isActive ? "active" : ""}`}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/projects"
                    className={({isActive}) => `navigation__item ${isActive ? "active" : ""}`}
                >
                    My Projects
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => `navigation__item ${isActive ? "active" : ""}`}
                >
                    About me
                </NavLink>
                <NavLink 
                    to="/contact"
                    className={({isActive}) => `navigation__item ${isActive ? "active" : ""}`}
                >
                    Contact me
                </NavLink>
            </ul>
        </div>
    </nav>
  )
}
