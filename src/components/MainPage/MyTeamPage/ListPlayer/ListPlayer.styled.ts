import styled from "styled-components"

export const ListPlayerContainer = styled.div`
  width: 869px;
  height: 768px;
  display: flex;
  justify-content: space-between;
`

export const Sidebar = styled.div`
  width: 274px;
  height: 100%;
  background: #3d195b;
  border-radius: 16px 0px 0px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & .uniform-img {
    height: 249px;
    width: 202px;
    margin-top: 65px;
  }
`

export const ListContainer = styled.div`
  width: 100%;
  padding: 28px;
`

export const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;

  & .title {
    background: #3d195b;
    border-radius: 4px;
    height: 25px;
    width: 150px;
    padding: 0px 10px;

    & h3 {
      font-weight: 800;
      font-size: 14px;
      line-height: 22px;
      display: flex;
      justify-content: start;
      align-items: center;
      color: #00ff87;
    }
  }
`

export const HeaderList = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-bottom: 1px solid #efefef;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;

    & span {
      font-weight: 300;
      font-size: 12px;
      line-height: 19px;
      color: #999999;
    }
  }
`

export const RowList = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  width: 100%;
  padding: 7px 0px;
  border-bottom: 1px solid #efefef;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;

    &.name-player {
      padding-right: 15px;
      justify-content: start;
    }

    & span {
      font-size: 12px;
      line-height: 19px;
      color: #3d195b;
    }
  }
`
