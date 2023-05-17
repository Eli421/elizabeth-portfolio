
import React from 'react'
import { Titles } from '../../components/Titles/Titles'
import { ValueCards } from '../../components/Cards/ValueCards/ValueCards'
import '../myValues/myValues.scss'

export const MyValues = () => {
  return (
    <div className="myValues">
        <div className="title1 container">
            <Titles
            text1='My personal values'
            colorText1='colorSecundario'
            />
        </div>

        <div className="myValues__cards">
            <ValueCards/>
        </div>
    </div>
  )
}

