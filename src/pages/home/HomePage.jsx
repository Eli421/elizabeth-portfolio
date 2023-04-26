import React from 'react'
import { Header } from '../../layouts/header/header'
import { AboutMe } from '../../layouts/aboutMe/AboutMe'
import { MySkills } from '../../layouts/mySkills/mySkills'





export const HomePage = () => {
  return (
    <>
        <Header/>
        <AboutMe/>
        <MySkills/>
    </>
  )
}
