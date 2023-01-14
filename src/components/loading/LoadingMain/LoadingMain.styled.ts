import styled from "styled-components"

export const LoadingContainer = styled.div`
  position: fixed;
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
  width: 9.375rem;
  height: 9.375rem;
  animation: rotate 20s linear infinite;

  &:hover span::before {
    transform-origin: 15.625rem;
    box-shadow: 0 0 1.25rem #00dfff, -12.5rem -12.5rem 0 #00dfff,
      -12.5rem -12.5rem 1.25rem #00dfff, 12.5rem 12.5rem 0 #00dfff,
      12.5rem 12.5rem 1.25rem #00dfff, 12.5rem -12.5rem 0 #00dfff,
      12.5rem -12.5rem 1.25rem #00dfff, -12.5rem 12.5rem 0 #00dfff,
      -12.5rem 12.5rem 1.25rem #00dfff;
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
    width: 1.5625rem;
    height: 1.5625rem;
    background-color: transparent;
    border: 0.25rem solid #00dfff;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 0 0 1.25rem #00dfff, -1.4375rem -1.4375rem 0 #00dfff,
      -1.4375rem -1.4375rem 1.25rem #00dfff, 1.4375rem 1.4375rem 0 #00dfff,
      1.4375rem 1.4375rem 1.25rem #00dfff, 1.4375rem -1.4375rem 0 #00dfff,
      1.4375rem -1.4375rem 1.25rem #00dfff, -1.4375rem 1.4375rem 0 #00dfff,
      -1.4375rem 1.4375rem 1.25rem #00dfff;
    animation: rotate 4s linear infinite;
    animation-delay: ${({ dote }) => -0.25 * dote}s;
    transform-origin: 0.625rem;
    transition: 2s;
  }
`
