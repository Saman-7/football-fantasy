import styled from "styled-components"

export const LatesEventsContainer = styled.div`
  height: 936px;
  width: 670px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  & .title {
    display: flex;
    justify-content: start;
    width: 100%;
    & h1 {
      font-weight: 800;
      font-size: 24px;
      line-height: 38px;
      color: #3d195b;
    }
  }
`

export const BoxEventContent = styled.div`
  height: 180px;
  width: 640px;
  border-radius: 8px;
  background-color: #fbfbfb;
  margin: 12px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`

export const PictureEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    height: 80px;
    width: 80px;
    border-radius: 250px;
  }

  & span {
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    color: #3d195b;
    margin-top: 3px;
  }

  & svg {
    margin-top: 10px;
  }
`

export const MainBoxEvent = styled.div`
  height: 160px;
  width: 484px;
  border-radius: 8px;
  background-color: white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const HeadBoxEvent = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-size: 12px;
    line-height: 19px;
    color: #3d195b;
  }

  & .rating {
    width: 66px;
    height: 30px;
    background: linear-gradient(269.48deg, #04f5ec -30.14%, #03fbb8 109.7%);
    border-radius: 4px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
      font-weight: 800;
      font-size: 16px;
      line-height: 25px;
      color: #3d195b;
      margin-right: 2px;
    }
  }
`

export const ChangesPlayerContent = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-size: 12px;
    line-height: 19px;
    color: #3d195b;
    margin: 5px 0px;
  }

  & .items-content {
    display: flex;
    & .item {
      margin-left: 14px;
    }
  }
`

export const ItemEvent = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;

  & span {
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    color: #3d195b;
    margin-right: 3px;
  }
`

export const MatchWeek = styled.div`
  width: 30px;
  height: 106px;
  background: rgba(61, 25, 91, 0.06);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);

  & span {
    font-size: 12px;
    line-height: 19px;
    color: #3d195b;
    transform: rotate(-90deg);
  }
`
