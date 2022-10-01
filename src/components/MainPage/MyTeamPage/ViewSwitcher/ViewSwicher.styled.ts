import styled from "styled-components"

export const ViewSwitcherContainer = styled.div`
  grid-area: switch;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 6.875rem;

  & .rahnema-logo {
    background: white;
    box-shadow: 0rem 0rem 0.625rem rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    bottom: -0.625rem;
    width: 4.5625rem;
  }

  & .button-switch {
    width: 17rem;
    height: 2.5rem;
    background: #f7f7f7;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    & button {
      height: 1.875rem;
      width: 8.1875rem;
      border-radius: 0.25rem;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 1.375rem;
      color: #3d195b;
      border: none;
      background-color: inherit;
      font-family: vazirmatn;
      cursor: pointer;
      &.active {
        background-color: white;
      }
    }
  }

  @media (max-width: 480px) {
    width: 80%;
    margin-top: 2rem;
    height: auto;

    & .rahnema-logo {
      width: 9.375rem;
      height: 8rem;
    }

    & .button-switch {
      width: 80%;
      height: 40px;
      border-radius: 1rem;

      & button {
        font-size: 1.8rem;
        width: 48%;
        height: 80%;
      }
    }
  }
`
