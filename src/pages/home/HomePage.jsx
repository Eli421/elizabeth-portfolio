import React from 'react'
import { Header } from '../../layouts/header/header'
import { AboutMe } from '../../layouts/aboutMe/AboutMe'
import { MySkills } from '../../layouts/mySkills/mySkills'
import { TopProjects } from '../../layouts/topProjects/topProjects'
import { MyValues } from '../../layouts/myValues/MyValues'
import { Footer } from '../../layouts/footer/footer'





export const HomePage = () => {
  return (
    <>
        <Header/>
        <AboutMe/>
        <MySkills/>
        <TopProjects/>
        <MyValues/>
        <Footer/>
    </>
  )
}
