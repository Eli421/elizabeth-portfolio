
import React from 'react'
import '../../data'

const Social = ({id, image, reference, alternativeText}) => {
  return (
    <li key={id} className='social__item'><a target='_blank' href={reference}><img src={image} alt={alternativeText} /></a></li>
  )
}

export default Social