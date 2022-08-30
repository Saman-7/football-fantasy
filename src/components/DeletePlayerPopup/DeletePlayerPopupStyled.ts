import styled from "styled-components";

export const DeletePlayerPopupContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupBox = styled.div`
  height: 416px;
  width: 770px;
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  & .head-text {
    height: 60px;
    width: 770px;
    background: #3d195b;
    border-radius: 16px 16px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
      font-weight: 900;
      font-size: 24px;
      line-height: 38px;
      color: #00ff87;
    }
  }

  & .uniform-img {
    width: 100px;
    filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25));
  }

  & .question {
    font-family: roboto;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #3d195b;
    direction: rtl;
  }
`;

export const ButtonPopup = styled.div`
  margin-bottom: 75px;
  & button {
    border: 1px solid #3d195b;
    border-radius: 4px;
    height: 40px;
    width: 173px;
    border-radius: 4px;
    margin: 0px 11px;
    font-family: roboto;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #3d195b;
    cursor: pointer;

    &.delete {
      background-color: #ed1b5d;
      border: none;
      color: white;
    }
  }
`;
