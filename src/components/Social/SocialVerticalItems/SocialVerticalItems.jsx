
import React from 'react'
import '../SocialVerticalItems/socialVerticalItems.scss'
import '../../../data'

export const SocialVerticalItems = ({reference, image, alternativeText, name}) => {
  return (
    
     <ul className="socialVertical__list">
         <li className='socialVertical__list__item'><a className="socialVertical__list__flex" target='_blank' href={reference}><img className="socialVertical__list__image" src={image} alt={alternativeText} />{name}</a></li>   
     </ul>

    
  )
}

