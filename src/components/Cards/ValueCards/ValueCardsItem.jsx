import React from 'react'
import './ValueCardsItem.scss'
import '../../../data/personal-values'

export const ValueCardsItem = ({image, alternativeText, description}) => {
  return (
    <>
      <div className="value">
        <img className="value__image" src={image} alt={alternativeText} />
        <p className="value__text"> 
          {description}
        </p>
      </div>
    </>
  );
};
