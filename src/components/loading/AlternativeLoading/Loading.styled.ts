import styled from "styled-components"

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  cursor: progress;
`

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border: 13px solid transparent;
  border-bottom: 13px solid yellow;
  border-top: 13px solid purple;
  border-radius: 50%;
  animation: rotateCircle 2s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    right: 20px;
    bottom: 20px;
    left: 20px;
    border: 13px solid transparent;
    border-bottom: 13px solid red;
    border-top: 13px solid aqua;
    border-radius: 50%;
    animation: rotateCircle 2s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50px;
    right: 50px;
    bottom: 50px;
    left: 50px;
    border: 13px solid transparent;
    border-bottom: 13px solid lawngreen;
    border-top: 13px solid hotpink;
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
