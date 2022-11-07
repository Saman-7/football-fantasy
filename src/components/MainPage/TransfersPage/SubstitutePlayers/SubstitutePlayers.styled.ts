import styled from "styled-components"

export const SubstitutePlayersContainer = styled.div`
  height: 768px;
  width: 273px;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);
  margin-left: 24px;

  & .title-head {
    height: 50px;
    background: #3d195b;
    border-radius: 16px 16px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
      font-weight: 800;
      font-size: 18px;
      line-height: 28px;
      color: white;
    }
  }

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 714px;
    padding-bottom: 40px;
  }
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

  &.active {
    cursor: pointer;
    .uniform {
      filter: drop-shadow(0px 0px 20px #00ff00);
    }
  }
  &.inActive {
    cursor: not-allowed;
    .uniform {
      filter: drop-shadow(0px 0px 20px #f40009);
    }
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
    background-color: #05f1ff;
    & span {
      color: #3d185b;
    }
  }
`
