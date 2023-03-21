import React from 'react'
import { Button } from '../../components/Button/Button'
// import { SkillCards } from '../../components/Cards/SkillCards/SkillCards'
import { ValueCards } from '../../components/Cards/ValueCards/ValueCards'
import { Titles } from '../../components/Titles/Titles'

export const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Titles
        text1='About'
        text2='Me'
        colorText1='colorPrimario'
        colorText2='colorSecundario'
      />
    </>
  )
}
