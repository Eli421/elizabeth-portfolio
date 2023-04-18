

import React from 'react'
import '../Indicators/indicators.scss'

export const Indicators = ({name, color}) => {
  return (
    
    <div className="project">
        <div className="project__technologies">
        <div className={`project__indicator ${color}`}></div>
        <p className="project__technology ">{name}</p>
        </div>
    </div>
  )
}
