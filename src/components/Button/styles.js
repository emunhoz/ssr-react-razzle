import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  border: none;
  border-radius: 0.25em;
  cursor: pointer;
  padding: 15px 22px;
  background: #1885c9;
  color: white;
  font-size: 16px;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.5;
  }
`
