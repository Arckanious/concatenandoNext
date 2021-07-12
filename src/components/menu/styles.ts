import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ModalHeader = styled.div`
  display: flex;
  height: 5.6rem;
  justify-content: flex-end;
  padding: 1.6rem;
  width: 100%;
`

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
`

export const List = styled.ul`
  color: ${props => props.theme.colors.white};
  display: flex;
`

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 24px;
  justify-content: center;
  margin-right: 1.2rem;
  width: 24px;
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
  margin-right: 0.5rem;
`

export const IconImg = styled.img`
  margin-right: 0.5rem;
  width: 1.6rem;
`

export const Separator = styled.div`
  border-radius: 2px;
  border-top: 4px solid rgba(15, 14, 14, 0.05);
  width: 60%;
`

export const ListItemContainer = styled.div`
  align-items: center;
  display: flex;
  margin-right: 1.4rem;
  max-width: 120px;
  width: 50%;
`

export const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
`
export const MenuButton = styled.button`
  background: none;
  color: ${props => props.theme.colors.white};
`
