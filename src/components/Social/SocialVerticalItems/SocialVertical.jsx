
import React from 'react'
import { SocialVerticalItems } from '../SocialVerticalItems/SocialVerticalItems'
import { social } from '../../../data'
import '../SocialVerticalItems/socialVertical.scss'

export const SocialVertical = ({width="", bgColor=""}) => {
  return (
    <div className={`socialVertical ${width} ${bgColor}`}>
        {social.map( social => (
            <SocialVerticalItems
              key={social.id}
              reference={social.reference}
              image={social.image}
              alternativeText={social.alternativeText}
              name={social.name}
            />
          ))}
    </div>
  )
}
