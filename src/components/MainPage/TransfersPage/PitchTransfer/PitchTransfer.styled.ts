import styled from "styled-components"

export const PitchTransferContainer = styled.div`
  grid-area: pitch;
  width: 54.3125rem;
  height: 48rem;
  background-color: #29cb75;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  filter: drop-shadow(0rem 0rem 0.25rem rgba(0, 0, 0, 0.2));
  border-radius: 1rem;
  margin-top: 0.875rem;
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

export const LanesPitch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`
export const Lane = styled.div`
  width: 100%;
  height: 6.25rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const PlayerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .uniform {
    height: 6.25rem;
    width: 5.0625rem;
  }

  .arrow-up-down-box {
    position: absolute;
    right: -0.625rem;
    bottom: 0.3125rem;
  }
`

export const NameBox = styled.div`
  height: 1.5625rem;
  width: 7.5rem;
  border-radius: 0.25rem;
  background: #37013b;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -1.5625rem;

  & span {
    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    color: white;
  }

  &.active {
    background-color: #ebff00;
    & span {
      color: #3d185b;
    }
  }
`
