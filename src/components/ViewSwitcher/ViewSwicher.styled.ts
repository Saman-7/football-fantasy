import styled from "styled-components";

export const ViewSwitcherContainer = styled.div`
  grid-area: switch;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  & .rahnema-logo {
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    position: relative;
    bottom: -10px;
  }

  & .button-switch {
    width: 272px;
    height: 40px;
    background: #f7f7f7;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    & button {
      height: 30px;
      width: 131px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
      color: #3d195b;
      border: none;
      background-color: inherit;
      font-family: vazirmatn;
      &:first-child {
        background-color: white;
      }
    }
  }
`;
