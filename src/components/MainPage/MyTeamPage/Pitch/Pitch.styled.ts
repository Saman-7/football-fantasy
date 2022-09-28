import styled from "styled-components"

export const PitchContainer = styled.div`
  grid-area: pitch;
  width: 54.3125rem;
  height: 48rem;
  background-color: #29cb75;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  & .line-pitch {
    position: absolute;
    height: 98%;
    width: 91%;
    top: 1.25rem;
  }
`

export const PaleGreen = styled.div`
  width: 48.375rem;
  height: 36.25rem;
  margin-bottom: 1.875rem;
  opacity: 0.2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;

  & div {
    background-color: white;
    width: 48.375rem;
    height: 7.1875rem;
  }
`

export const LanePitch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  & .GK,
  & .DEF,
  & .MID,
  & .ATT {
    display: flex;
    justify-content: space-evenly;

    & .box {
      z-index: 10;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & .box .undress {
      height: 6.25rem;
      width: 5.0625rem;
      filter: drop-shadow(0rem 0.125rem 0.625rem rgba(0, 0, 0, 0.25));
      cursor: pointer;
    }

    & .box .uniform {
      height: 5.8125rem;
      width: 4.5625rem;
      filter: drop-shadow(0rem 0.125rem 0.625rem rgba(0, 0, 0, 0.25));
      cursor: pointer;
    }

    & .box .blue-dress {
      height: 6.25rem;
      width: 5.0625rem;
      filter: drop-shadow(0rem 0.125rem 0.625rem rgba(0, 0, 0, 0.25));
      cursor: pointer;
      animation: rotateDerss 1s linear infinite;
      transition: 1s;
    }

    @keyframes rotateDerss {
      0% {
        transform: rotate(0deg) scale(1.1);
      }
      25% {
        transform: rotate(-5deg) scale(1.1);
      }
      75% {
        transform: rotate(5deg) scale(1.1);
      }
      100% {
        transform: rotate(0deg) scale(1.1);
      }
    }

    & .box .plus-icon {
      position: absolute;
      width: 1.5rem;
      height: 1.5rem;
      top: 2.125rem;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
    }

    & .box .delete-icon {
      position: absolute;
      width: 1.5rem;
      height: 1.5rem;
      right: -0.625rem;
      top: -0.625rem;
      z-index: 100;
      cursor: pointer;
    }
  }

  & .GK {
    justify-content: center;
    & .box {
      margin: 0rem 2.8125rem;
    }
  }
`

export const BoxDress = styled.div`
  width: 7.5rem;
  height: 2.8125rem;
  position: absolute;
  bottom: -2.5rem;
  user-select: none;

  & .title {
    width: 100%;
    height: 1.5625rem;
    background-color: #37013b;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
      font-weight: 700;
      font-size: 0.8125rem;
      line-height: 0.9375rem;
      color: white;
    }
  }

  & .rating {
    width: 100%;
    height: 1.25rem;
    background-color: rgba(204, 255, 228, 0.27);
    border-radius: 0rem 0rem 0.5rem 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    & span {
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 0.875rem;
      color: #38003c;
    }
  }

  & img {
    -webkit-user-drag: none;
  }
`
