import React from 'react'

import "./button.scss"

export const Button = ({text, background, colorText, action}) => {
  return (
    <button 
      className={`btn ${background} ${colorText}`}
      onClick={action}
    >
        {text}
    </button>
  )
}
