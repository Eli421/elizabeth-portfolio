import React from 'react'
import html from '../../../assets/img/skills_html.png'
import './skillItem.scss'

export const SkillItem = () => {
  return (
    <>
      <div className="card">
        <img className="card__img" src={html} alt="html logo" />
        <h3 className="card__title">HTML</h3>
      </div>
    </>
  );
}
