

import React from 'react'
import { Button } from '../../components/Button/Button'
import photo from '../../assets/img/eli-header.jpg'
import '../header/header.scss'
import { Titles } from '../../components/Titles/Titles'
import {Navbar} from '../../components/Navbar/Navbar'

export const Header = () => {
  return (
    <div className="header__background">
        <Navbar/>
        <div className="header__content">
            <div className="header__textContainer">
                <Titles
                secondTitle='secondTitle'
                colorText1='colorSecundario'
                text1='Hello! I am'
                colorText2='colorPrimario'
                text2='a front-end web developer'
                />
                <Button
                text='Download CV'
                background={`secundario`}
                colorText={`blanco`}
                // action={}
                />
            </div>
            <div className="header__photoContainer">
                <img className="header__photo" src={photo} alt="self portrait"/>
            </div>
        </div>
    </div>
  )
}
