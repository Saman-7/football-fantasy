import styled from "styled-components"

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  cursor: progress;
`

export const Circle = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  border: 0.8125rem solid transparent;
  border-bottom: 0.8125rem solid yellow;
  border-top: 0.8125rem solid purple;
  border-radius: 50%;
  animation: rotateCircle 2s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    bottom: 1.25rem;
    left: 1.25rem;
    border: 0.8125rem solid transparent;
    border-bottom: 0.8125rem solid red;
    border-top: 0.8125rem solid aqua;
    border-radius: 50%;
    animation: rotateCircle 2s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 3.125rem;
    right: 3.125rem;
    bottom: 3.125rem;
    left: 3.125rem;
    border: 0.8125rem solid transparent;
    border-bottom: 0.8125rem solid lawngreen;
    border-top: 0.8125rem solid hotpink;
    border-radius: 50%;
    animation: rotateCircle 4s linear infinite;
  }

  @keyframes rotateCircle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
