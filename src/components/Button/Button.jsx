
import React from 'react'
import "./button.scss"

const Button = ({bgColor, txColor, text}) => {
    
  return (
    <button className= {`btn ${bgColor} ${txColor}`}>
       {text}
    </button>
  )
}

export default Button

//La funcion tiene que recibir una variable para background color, color y el texto:

//bgColor
//txColor
//text