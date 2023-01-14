import styled from "styled-components"

export const CompositionContainer = styled.select`
  direction: ltr;
  position: absolute;
  right: 0;
  top: 9.4rem;
  width: 11rem;
  height: 2.2rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  word-spacing: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0rem 0rem 0.625rem 0.1rem rgb(0 0 0 / 12%);
  color: #3d195b;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  & option {
    height: 50px;
    &:hover {
      background-color: #3d195b;
    }
  }
`
