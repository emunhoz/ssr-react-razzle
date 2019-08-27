import React from 'react'
import Menu from './../Menu'
import { HeaderWrapper, Content } from './styles'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderWrapper>
    <Content>
      <Link to='/'>
        <svg width='124' height='23' viewBox='0 0 124 23'>
          <title>Go to homepage</title>
          <rect width='70' height='23' fill='#c96aa4' />
          <rect x='70' width='27' height='23' fill='#9a57bd' />
          <rect x='97' width='27' height='23' fill='#fff' />
        </svg>
      </Link>
      <Menu />
    </Content>
  </HeaderWrapper>
)

export default Header
