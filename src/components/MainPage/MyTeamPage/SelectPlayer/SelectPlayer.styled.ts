import styled from "styled-components"

export const SelectPlayerContainer = styled.div`
  height: 54.875rem;
  width: 17.0625rem;
  box-shadow: 0rem 0rem 0.625rem rgba(0, 0, 0, 0.12);
  border-radius: 1rem 1rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-left: 1.5rem;
  position: relative;

  & .title-head {
    width: 100%;
    height: 3.125rem;
    background: #3d195b;
    border-radius: 1rem 1rem 0rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
      font-weight: 800;
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: white;
    }
  }
`

export const InputSearch = styled.div`
  width: 15.25rem;
  height: 2.5rem;
  background: white;
  border-bottom: 0.0625rem solid #e4e4e4;
  margin-top: 1.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .search-icon {
    margin: 0rem 0.625rem;
    width: 1.5rem;
  }

  & input {
    border: none;
    direction: rtl;
    width: 100%;
    height: 100%;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1.375rem;
    color: rgba(61, 25, 91, 0.67);
    padding: 0rem 0.625rem;
    font-family: vazirmatn;
    &:focus {
      outline: none;
      border-bottom: 0.0625rem solid;
    }
  }
`

export const FilterButton = styled.div`
  margin: 1.25rem 0rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  & button {
    width: 2.5rem;
    height: 1.875rem;
    background: white;
    border: 0.0625rem solid #f3f3f3;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 0.875rem;
    cursor: pointer;
    &.active {
      background: linear-gradient(269.48deg, #04f5ec -30.14%, #03fbb8 109.7%);
    }
    &.block {
      background-color: #ff9797;
      cursor: not-allowed;
    }
  }
`

export const DisplayNumberPlayer = styled.div`
  width: 11.25rem;
  height: 1.875rem;
  background: linear-gradient(269.48deg, #04f5ec -30.14%, #03fbb8 109.7%);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;
  & span {
    font-weight: 700;
    font-size: 0.6875rem;
    line-height: 1.0625rem;
  }
`

export const ListPlayers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  & .row-player {
    width: 15rem;
    height: 2.5rem;
    direction: rtl;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    justify-content: center;
    align-content: center;
    background-color: white;
    border-bottom: 0.0625rem solid #efefef;
    &:last-child {
      border-bottom: none;
    }

    &.active:hover {
      background-color: #fff09b;
      cursor: pointer;
    }

    & div span {
      display: flex;
      justify-content: start;
      align-items: center;
      &:last-child {
        font-weight: 400;
        font-size: 0.5625rem;
        line-height: 0.875rem;
        color: rgba(61, 25, 91, 0.36);
      }
    }

    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.75rem;
      line-height: 1.1875rem;
      color: #3d195b;
      &:first-child {
        justify-content: start;
      }
      &.header {
        color: #999999;
        & .arrow-svg {
          width: 0.625rem;
        }
      }
    }
  }
`

export const ChangePage = styled.div`
  position: absolute;
  bottom: 1.75rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 1.8125rem;
  user-select: none;

  & svg {
    cursor: pointer;
    width: 1.5rem;
  }

  & span {
    font-size: 0.75rem;
    line-height: 1.1875rem;
    color: #3d195b;
  }
`
