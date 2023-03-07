import React from 'react'
import Social from '../Social/Social'
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { social } from '../../data';

export const Navbar = () => {
  return (
    <nav className='menu'>
        <div className="menu__content container">
            <ul className='social'>
                    {social.map( social => (
                        <Social 
                        key={social.id}
                        reference={social.reference}
                        image={social.image}
                        alternativeText={social.alternativeText}
                        />
                    ))}
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
