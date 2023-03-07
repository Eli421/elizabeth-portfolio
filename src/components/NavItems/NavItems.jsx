
import React from 'react'
import { NavLink } from 'react-router-dom'
import './navItems.scss'

export const NavItems = ({name, path}) => {
  return (
    <NavLink 
        to={path}
        className={({isActive}) => `navigation__item ${isActive ? "active" : ""}`}
>
        {name}
    </NavLink>
  )
}


