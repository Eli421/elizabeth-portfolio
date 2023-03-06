import React from 'react'
import { Navigate } from 'react-router-dom'
import Button from '../../components/Button/button'

const callHelloWorld = () => {
  <Navigate to='/projects'/>
}

export const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Button 
        text= "Download CV"
        bgColor= "btn-secundary"
        txColor="white-text"
        btnFunction={callHelloWorld}
      />
    </>

  )
}
