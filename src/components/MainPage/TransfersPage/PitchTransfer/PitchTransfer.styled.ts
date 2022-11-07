import styled from "styled-components"

export const PitchTransferContainer = styled.div`
  grid-area: pitch;
  width: 869px;
  height: 768px;
  background-color: #29cb75;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));
  border-radius: 16px;
  margin-top: 14px;

  & .line-pitch {
    position: absolute;
  }
`

export const PaleGreen = styled.div`
  width: 774px;
  height: 580px;
  margin-bottom: 30px;
  opacity: 0.2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;

  & div {
    background-color: white;
    width: 774px;
    height: 115px;
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
  height: 100px;
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
    height: 100px;
    width: 81;
  }

  .arrow-up-down-box {
    position: absolute;
    right: -10px;
    bottom: 5px;
    cursor: pointer;
  }
`

export const NameBox = styled.div`
  height: 25px;
  width: 120px;
  border-radius: 4px;
  background: #37013b;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -25px;

  & span {
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    color: white;
  }

  &.active {
    background-color: #ebff00;
    & span {
      color: #3d185b;
    }
  }
`
