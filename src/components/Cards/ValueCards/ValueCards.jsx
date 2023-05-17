import React from 'react';
import { ValueCardsItem } from './ValueCardsItem';
import './ValueCards.scss';
import { personalValues } from '../../../data';

export const ValueCards = () => {
  return (
    <>
      <div className="values">
        { personalValues.map( value => (
          <ValueCardsItem
            key={value.id}
            image={value.image}
            alternativeText={value.alternativeText}
            description={value.description}
          />
        ))}
      </div>
    </>
  )
}
