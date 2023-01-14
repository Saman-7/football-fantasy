import styled from "styled-components"

export const WarningContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  right: 0;
  top: 0;
`
export const PopupWarning = styled.div`
  height: 26rem;
  width: 48.125rem;
  border-radius: 1rem;
  box-shadow: 0rem 0rem 0.625rem rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  animation: scaleBox 0.3s ease-out 1;

  @keyframes scaleBox {
    0% {
      transform: scale(0.1);
    }
    100% {
      transform: scale(1);
    }
  }

  & .head-text {
    height: 3.75rem;
    width: 48.125rem;
    background: #3d195b;
    border-radius: 1rem 1rem 0rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
      font-weight: 900;
      font-size: 1.5rem;
      line-height: 2.375rem;
      color: #00ff87;
    }
  }

  & .warning-svg {
    width: 8.125rem;
    filter: drop-shadow(0rem 0.125rem 0.625rem rgba(0, 0, 0, 0.25));
  }

  & .text {
    font-family: vazirmatn;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.4375rem;
    color: #3d195b;
  }

  & button {
    border: 0.0625rem solid #3d195b;
    border-radius: 0.25rem;
    height: 2.5rem;
    width: 10.8125rem;
    border-radius: 0.25rem;
    margin: 0rem 0.6875rem;
    font-family: roboto;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.1875rem;
    background-color: #ed1b5d;
    border: none;
    color: white;
    cursor: pointer;
    font-family: vazirmatn;
    margin-bottom: 3.125rem;
  }

  @media (max-width: 480px) {
    & .head-text {
      height: 4rem;
      & span {
        font-size: 2rem;
      }
    }
    & .warning-svg {
      width: 9rem;
    }
    & .text {
      font-size: 1.5rem;
    }
    & button {
      font-size: 1.5rem;
      margin-bottom: 2.7rem;
      height: 3rem;
      width: 11rem;
    }
  }
`
