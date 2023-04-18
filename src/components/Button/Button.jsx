import React from 'react'

import "./button.scss"

export const Button = ({text, background, colorText, action, width=''}) => {
  return (
    <button 
      style={{width: width}}
      className={`btn ${background} ${colorText}`}
      onClick={action}
    >
        {text}
    </button>
  )
}
