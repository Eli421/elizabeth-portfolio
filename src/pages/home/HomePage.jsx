import React from 'react'
import { Button } from '../../components/Button/Button'
// import { SkillCards } from '../../components/Cards/SkillCards/SkillCards'
import { ValueCards } from '../../components/Cards/ValueCards/ValueCards'
import { Quotes } from '../../components/Quotes/Quotes'
import { SocialVertical } from '../../components/Social/SocialVerticalItems/SocialVertical'
import { Titles } from '../../components/Titles/Titles'
import { social } from '../../data'
import { Header } from '../../layouts/header/header'
import { AboutMe } from '../../layouts/aboutMe/AboutMe'




export const HomePage = () => {
  return (
    <>
        <Header/>
        <AboutMe/>
    </>
  )
}
