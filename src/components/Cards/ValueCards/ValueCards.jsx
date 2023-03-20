import React from 'react';
import { ValueCardsItem } from './ValueCardsItem';
import './ValueCards.scss'

export const ValueCards = () => {
  return (
    <>
      <div className="values">
        <ValueCardsItem/>
        <ValueCardsItem/>
        <ValueCardsItem/>
        <ValueCardsItem/>
      </div>
    </>
  )
}
