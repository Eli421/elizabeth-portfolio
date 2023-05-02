

import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import footer from '../../assets/img/footer-wave.svg'
import '../footer/footer.scss'
import { SocialVertical } from '../../components/Social/SocialVerticalItems/SocialVertical'


export const Footer = () => {
  return (
    <div className="footer">
        <img className='footer__image' src={footer} alt="background image" />
        <div className="footer__content">
            <div className='footer__social'>
                <SocialVertical/>
            </div>

            <div className='footer__navbar'>
                <ul className='footer__list'>
                    <li>Home</li>
                    <li>My Projects</li>
                    <li>About Me</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        </div>

        <p className='footer__copyright'>Powered by Noviembre5 &copy;</p>
    </div>
  )
}
