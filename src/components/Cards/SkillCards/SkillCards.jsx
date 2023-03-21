
import React from 'react'
import { SkillItem } from './SkillItem'
import './skillCards.scss'
import { skillCards } from '../../../data'


export const SkillCards = () => {
  return (

    <div className="skills"> 
        {skillCards.map( skillCard => (
          <SkillItem
              key={skillCard.id}
              bgColor={skillCard.bgColor}
              image={skillCard.image}
              alternativeText={skillCard.alternativeText}
              title={skillCard.title}
          />
        ))}
    </div>
  )
}
