import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'
import { AboutPage } from '../pages/about/AboutPage'
import { ContactPage } from '../pages/contact/ContactPage'
import { HomePage } from '../pages/home/HomePage'
import { ProjectsPage } from '../pages/projects/ProjectsPage'


export const AppRouter = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </div>
    </>
  )
}
