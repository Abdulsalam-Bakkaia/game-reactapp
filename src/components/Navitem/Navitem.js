import './Navitem.css'

import React from 'react'

function Navitem(props) {
  return (
    <li className='nav-item'>
        {props.children}
    </li>
  )
}

function NavitemDropDown(props) {
  return (
    <li className='nav-item dropdown'>
        {props.children}
    </li>
  )
}


export default Navitem;
export {NavitemDropDown}