import React from 'react'
import '../../../data'
import './skillItem.scss'

export const SkillItem = ({bgColor, image, alternativeText, title}) => {
  return (
    <>
      <div className={`card ${bgColor}`}>
        <img className="card__img" src={image} alt={alternativeText} />
        <h3 className="card__title">{title}</h3>
      </div>
    </>
  );
}
