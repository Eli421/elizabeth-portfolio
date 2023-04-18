
import React from 'react'
import { Button } from '../../Button/Button'
import  projectImage  from '../../../assets/img/p-cafeteria.jpg'
import './projectItem.scss'


export const ProjectItem = ({children, children2, text, projectImage}) => {
  return (

    <div className="cardProject">
        <img className="cardProject__image" src={ projectImage } alt="project image" />
        <p className="cardProject__text">{text}</p>

        {children}
    

        {children2}
        <Button
            width='100%'
            background={`primario blanco`}
            //action={}
            text='Visit the site'
        />

    </div>
  )
}
