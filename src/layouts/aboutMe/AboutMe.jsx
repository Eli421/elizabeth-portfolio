
import React from 'react'
import { Titles } from '../../components/Titles/Titles'
import {Button} from '../../components/Button/Button'
import '../aboutMe/aboutMe.scss'
import Photo from '../../assets/img/eli-aboutMe.jpg'
import PhotoB from '../../assets/img/eli-aboutMe_4.png'


export const AboutMe = () => {
  return (
    <>
        <div className="about container">
            <div className="about__titleContainer">
                <Titles
                text1='About Myself'
                colorText1='colorSecundario'
                />
            </div>
                 <div className="about__section">
                   <div className="about__graphics">
                    <div className="about__image">
                      <img className="about__portrait" src={Photo} alt="self portrait" />
                    </div>
                    <div className="about__graphicA"></div>
                    <div className="about__graphicB"></div>
                    <div className="about__graphicC"></div>
                   </div>
                   <div className="about__textContainer">
                      <p className='about__text'>I'm a self-taught web developer who specializes in React and React Native. I strongly believe in the value of continuous learning, and it has become a passion of mine that I pursue daily.</p>
                      <p className='about__text'>As a front-end developer, I use my creativity to help clients achieve their vision for their websites and web applications. My expertise in HTML, CSS, JavaScript, React, Git, and GitHub allows me to create high-performance code that prioritizes an enjoyable user experience. I always follow best practices to ensure my work is top-notch and my clients are happy with the results.
                      </p>
                      <p className='about__text'>
                      Besides my technical skills I am committed to staying up-to-date with the latest trends and technologies in the industry, and I regularly attend conferences and workshops to expand my knowledge and skills. This dedication to continuous learning has helped me stay ahead of the curve and deliver cutting-edge solutions to my clients. My  passion for web development  and collaborative approach make me a valuable asset to any team or project.
                      </p>
                      <Button
                      text='Read More'
                      background='blancoBg'
                      colorText='secundarioText'
                      //action=''
                      />
                   </div>
                 </div>
        </div>
    </>
    
  )
}
