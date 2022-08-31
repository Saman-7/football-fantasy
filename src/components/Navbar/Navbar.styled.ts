import styled from "styled-components"

export const NavbarContainer = styled.ul`
  width: 48.125rem;
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0rem 0rem 0.625rem rgba(0, 0, 0, 0.12);
  margin: auto;
  position: relative;
  z-index: 10;
  background-color: white;
  border-radius: 0.5rem;
`

export const NavbarItem = styled.li`
  width: 8.875rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;

  &:first-child,
  &:hover {
    background: linear-gradient(262.49deg, #05f4f1 -27.69%, #00ff87 112.29%);
  }

  & a {
    width: 7.5rem;
    height: 2.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 1.0625rem;
    line-height: 1.6875rem;
    color: #3d195b;

    &:link,
    &:visited,
    &:hover,
    &:active {
      text-decoration: none;
    }
  }
`
