import React from 'react'
import Social from '../Social/Social'
import {NavItems} from '../NavItems/NavItems'
import './navbar.scss';
import { social, navItems} from '../../data';

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
                
                {navItems.map(item => (
                    <NavItems
                        key={item.id}
                        path={item.path}
                        name={item.name}
                    />
                ))
                }
            </ul>
        </div>
    </nav>
  )
}
