import styled from "styled-components"

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #001f25;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: progress;
`

export const Content = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  animation: rotate 20s linear infinite;

  &:hover span::before {
    transform-origin: 250px;
    box-shadow: 0 0 20px #00dfff, -200px -200px 0 #00dfff,
      -200px -200px 20px #00dfff, 200px 200px 0 #00dfff,
      200px 200px 20px #00dfff, 200px -200px 0 #00dfff,
      200px -200px 20px #00dfff, -200px 200px 0 #00dfff,
      -200px 200px 20px #00dfff;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) scale(0.9);
      filter: hue-rotate(0deg);
    }
    100% {
      transform: rotate(360deg) scale(0.9);
      filter: hue-rotate(360deg);
    }
  }
`

interface TypeDote {
  dote: number
}
export const Dote = styled.span<TypeDote>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(${({ dote }) => 36 * dote}deg);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: 4px solid #00dfff;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 0 0 20px #00dfff, -23px -23px 0 #00dfff,
      -23px -23px 20px #00dfff, 23px 23px 0 #00dfff, 23px 23px 20px #00dfff,
      23px -23px 0 #00dfff, 23px -23px 20px #00dfff, -23px 23px 0 #00dfff,
      -23px 23px 20px #00dfff;
    animation: rotate 4s linear infinite;
    animation-delay: ${({ dote }) => -0.25 * dote}s;
    transform-origin: 10px;
    transition: 2s;
  }
`
