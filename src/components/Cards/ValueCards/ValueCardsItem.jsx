import React from 'react'
import './ValueCardsItem.scss'
import Value_1 from '../../../assets/img/value_1.png'

export const ValueCardsItem = () => {
  return (
    <>
      <div className="value">
        <img className="value__image" src={Value_1} alt="first icon" />
        <p className="value__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
          reiciendis fugiat nihil cumque atque aspernatur explicabo{" "}
        </p>
      </div>
    </>
  );
};
