import React from 'react'
import { MenuWrapper, MenuIcon, List, ItemMenu } from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const hide = e => {
    if (e && e.relatedTarget) e.relatedTarget.click()
    setIsOpen(false)
  }

  return (
    <MenuWrapper>
      <MenuIcon onClick={() => setIsOpen(!isOpen)} onBlur={e => hide(e)}>
        {isOpen ? 'Close' : 'Menu'}
      </MenuIcon>
      <List isOpen={isOpen}>
        <li>
          <ItemMenu to='/'>Home</ItemMenu>
        </li>
        <li>
          <ItemMenu to='/about'>About</ItemMenu>
        </li>
        <li>
          <ItemMenu to='/counter'>Counter</ItemMenu>
        </li>
      </List>
    </MenuWrapper>
  )
}

export default Menu
