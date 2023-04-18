
import React from 'react'
import { ProjectItem } from './ProjectItem'
import {Technology} from '../../Technology/Technology'
import { Indicators } from '../../Indicators/Indicators'
import './projects.scss'

export const Projects = () => {
  return (
    <div className="cardProject__content">
      <ProjectItem projectImage='/src/assets/img/p-presupuesto.jpg' text='This budgeting platform provides a responsive design that allows users to track expenses and categorize them as well as visualize them in a graphic.'>    
        <div className="cardProject__container">
            <div className="cardProject__graphic">
              <Technology className='html'width='2.9%'/>
              <Technology className='css'width='29.1%'/>
              <Technology className='js'width='68%'/>
            </div>
        </div>
        <div className="cardProject__indicatorContent">
            <Indicators name='HTML' color='html'/>
            <Indicators name='CSS' color='css'/>
            <Indicators name='JavaScript - React' color='js'/>
         </div>
        </ProjectItem> 
      <ProjectItem projectImage='/src/assets/img/p-cafeteria.jpg' text='This modern and responsive website ensures a seamless browsing experience for visitors, and interactive menus make ordering easy and enjoyable. '>    
        <div className="cardProject__container">
            <div className="cardProject__graphic">
              <Technology className='html'width='61%'/>
              <Technology className='sass'width='36.6%'/>
              <Technology className='js'width='1.9%'/>
            </div>
        </div>
        <div className="cardProject__indicatorContent">
            <Indicators name='HTML' color='html'/>
            <Indicators name='SASS' color='sass'/>
            <Indicators name='JavaScript' color='js'/>
         </div>
        </ProjectItem> 
      <ProjectItem projectImage='/src/assets/img/p-techPro.jpg' text='Created using HTML, CSS, and JavaScript. Shows a sleek design optimized for all devices and features dynamic elements that enhance the user experience. '>    
        <div className="cardProject__container">
            <div className="cardProject__graphic">
              <Technology className='html'width='31.3%'/>
              <Technology className='css'width='52.5%'/>
              <Technology className='js'width='16.2%'/>
            </div>
        </div>
        <div className="cardProject__indicatorContent">
            <Indicators name='HTML' color='html'/>
            <Indicators name='CSS' color='css'/>
            <Indicators name='JavaScript' color='js'/>
         </div>
        </ProjectItem> 
      <ProjectItem projectImage='/src/assets/img/p-deliveryApp.jpg' text='The delivery service website provides a seamless user-friendly experience with a unique and modern design and responsive performance.'>    
        <div className="cardProject__container">
            <div className="cardProject__graphic">
              <Technology className='html'width='50.4%'/>
              <Technology className='sass'width='45.7%'/>
              <Technology className='js'width='3.9%'/>
            </div>
        </div>
        <div className="cardProject__indicatorContent">
            <Indicators name='HTML' color='html'/>
            <Indicators name='SASS' color='sass'/>
            <Indicators name='JavaScript' color='js'/>
         </div>
        </ProjectItem> 
    </div>
  )
}
