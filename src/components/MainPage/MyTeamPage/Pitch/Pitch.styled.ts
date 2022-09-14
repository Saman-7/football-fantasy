import styled from "styled-components"

export const PitchContainer = styled.div`
  grid-area: pitch;
  width: 869px;
  height: 768px;
  background-color: #29cb75;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

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
      height: 100px;
      width: 81px;
      filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25));
      cursor: pointer;
    }

    & .box .uniform {
      height: 93px;
      width: 73px;
      filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25));
      cursor: pointer;
    }

    & .box .plus-icon {
      position: absolute;
      top: 34px;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
    }

    & .box .delete-icon {
      position: absolute;
      right: -10px;
      top: -10px;
      z-index: 100;
      cursor: pointer;
    }
  }

  & .GK {
    justify-content: center;
    & .box {
      margin: 0px 45px;
    }
  }
`

export const BoxDress = styled.div`
  width: 120px;
  height: 45px;
  position: absolute;
  bottom: -40px;

  & .title {
    width: 100%;
    height: 25px;
    background-color: #37013b;
    border-radius: 8px 8px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
      font-weight: 700;
      font-size: 13px;
      line-height: 15px;
      color: white;
    }
  }

  & .rating {
    width: 100%;
    height: 20px;
    background-color: rgba(204, 255, 228, 0.27);
    border-radius: 0px 0px 8px 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    & span {
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: #38003c;
    }
  }
`
