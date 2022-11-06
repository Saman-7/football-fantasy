import styled from "styled-components"

export const MenuNavbar = styled.div`
  position: relative;
  width: 90%;
  height: 5rem;
  border-radius: 0.5rem;
  margin: 1.875rem 0rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-weight: 900;
    font-size: 2.125rem;
    background: linear-gradient(264.3deg, #18deea 34.99%, #26e9a0 73.31%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  & svg {
    width: 3.75rem;
    height: 4.5rem;
    position: absolute;
    right: 1rem;
  }
`

export const NavbarContainer = styled.ul`
  width: 58.75rem;
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
  top: -2.5rem;

  @media (max-width: 480px) {
    width: 90%;
    height: auto;
    flex-direction: column;
    position: absolute;
    z-index: 100;
    top: 23rem;
  }
`

export const NavbarItem = styled.li`
  width: 8.875rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 1.0625rem;
    line-height: 1.6875rem;
    color: #3d195b;
    border-radius: 0.5rem;

    &.active {
      background: linear-gradient(262.49deg, #05f4f1 -27.69%, #00ff87 112.29%);
    }

    &:link,
    &:visited,
    &:hover,
    &:active {
      text-decoration: none;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 4.75rem;

    border-radius: 0;
    font-size: 2rem;
    font-weight: 900;

    & a {
      font-size: 1.7rem;
      font-weight: 900;
      font-size: 1.75rem;
      &.active {
        background: none;
      }
      &:hover {
        color: #00ff87;
      }
    }
  }
`
