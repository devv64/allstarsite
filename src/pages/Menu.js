import React from 'react'
import { MenuList } from '../api/MenuList'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Selection</h1>
        <div className='menuList'>
            {MenuList.map((menuItem, key) => {
                return <MenuItem
                image={menuItem.image} 
                name={menuItem.name} 
                price={menuItem.price} 
                />
            })}
        </div>
    </div>
  )
}

export default Menu