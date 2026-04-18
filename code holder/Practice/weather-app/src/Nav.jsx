import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <NavLink to = '/counter' >counter</NavLink>
        <NavLink to = '/todo' >TO-do</NavLink>
        <NavLink to = '/news' > News</NavLink>
    </div>
  )
}

export default Nav
