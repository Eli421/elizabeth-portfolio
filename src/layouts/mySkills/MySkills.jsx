
import React from 'react'
import { Titles } from '../../components/Titles/Titles'
import { SkillCards } from '../../components/Cards/SkillCards/SkillCards'
import { Quotes } from '../../components/Quotes/Quotes'
import '../mySkills/mySkills.scss'

export const MySkills = () => {
  return (
    <div>
        <div className="mySkills">
            <div className="mySkills__title">
                <Titles
                colorText1='colorTerciario'
                text1='My Skills'
                />
            </div>
            <div className="mySkills__container">
                <SkillCards/>
            </div>
        </div>
        <div className="quotes">
            <Quotes/>
        </div>
    </div>
  )
}
