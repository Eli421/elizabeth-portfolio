import React from 'react'
import { Titles } from '../../components/Titles/Titles'
import { Projects } from '../../components/Cards/ProjectCards/Projects'
import '../topProjects/topProjects.scss'


export const TopProjects = () => {
  return (
    
    <div className="topProjects">
        <div className='titleContent'>
            <div className="title__container">
                <Titles
                colorText1='colorPrimario'
                colorText2='colorSecundario'
                colorText3='colorPrimario'
                text1='My'
                text2='top'
                text3='projects'
                />
            </div>
        </div>
        <div className='myProjects'>
            <p className='myProjects__text'>
            All of my projects, including this portfolio, are fully <span className='myProjects__emphasis'>responsive.</span>  This means that you can easily access them on your phones, tablets, laptops, or desktop computers, and the design will seamlessly adapt to any screen size. Don't take my word for it - try it out for yourself! Additionally, if you would like to explore all of my projects and their data, simply click right <a className='myProjects__emphasis'>here!</a> 
            </p> 
            <Projects/>
        </div>
    </div>
  )
}
