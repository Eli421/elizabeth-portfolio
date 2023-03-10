
import React from 'react'
import '../../data'
import '../Social/social.scss'

const Social = ({ image, reference, alternativeText}) => {
  return (
    <li className='social__item'><a target='_blank' href={reference}><img src={image} alt={alternativeText} /></a></li>
  )
}

export default Social