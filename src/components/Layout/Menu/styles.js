import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MenuWrapper = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 768px) {
    display: none;
    ${props => !props.isOpen} {
      background: var(--primary);
      position: absolute;
      display: flex;
      flex-flow: column;
      top: 50px;
      width: 100%;
      padding: 15px 0;
      left: 0;
    }
  }
`

export const MenuIcon = styled.button`
  background: none;
  display: flex;
  color: #969696;
  height: 100%;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 14px;
  border: none;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ItemMenu = styled(Link)`
  @media (min-width: 768px) {
    color: #969696;
    text-decoration: none;
    padding: 17.5px;
    font-size: 12px;
    &:hover {
      background: #f1f1f1;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    display: block;
    padding: 15px;
    color: var(--white);
    text-decoration: none;
  }
`
