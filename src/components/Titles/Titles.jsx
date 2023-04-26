
import React from 'react'
import '../Titles/titles.scss'

export const Titles = ({text1, text2='', text3='', text4='', colorText1='', colorText2='', colorText3='', colorText4='', secondTitle='title'}) => {
  return (
    <h1 className= {`${secondTitle} ${colorText1}`}>{text1}
    
    { text2 && <span className={colorText2}>{' '}{text2}</span> }
    
    { text3 && <span className={colorText3}>{' '}{text3}</span> }
    
    { text4 && <span className={colorText4}>{' '}{text4}</span> }
    
    </h1>
  )
}
