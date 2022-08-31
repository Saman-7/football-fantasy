import styled from "styled-components";

export const NavbarContainer = styled.ul`
  width: 770px;
  height: 80px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);
  margin: auto;
  position: relative;
  z-index: 10;
  background-color: white;
`;

export const NavItem = styled.li`
  width: 142px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  &:first-child,
  &:hover {
    background: linear-gradient(262.49deg, #05f4f1 -27.69%, #00ff87 112.29%);
  }

  & a {
    width: 120px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 27px;
    color: #3d195b;

    &:link,
    &:visited,
    &:hover,
    &:active {
      text-decoration: none;
    }
  }
`;
