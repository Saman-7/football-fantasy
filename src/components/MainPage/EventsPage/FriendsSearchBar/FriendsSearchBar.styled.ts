import styled from "styled-components"

export const Container = styled.div`
  width: 35.75rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-bottom: 0.0625rem solid rgba(61, 25, 91, 0.8);
  position: relative;

  & input {
    border: transparent;
    width: 100%;
    outline: none;
    font-family: Vazirmatn;
    font-size: 1.125rem;
    font-weight: 300;
    text-align: right;
    color: rgba(61, 25, 91, 1);
  }

  & input::placeholder {
    font-family: Vazirmatn;
    font-size: 0.875rem;
    font-weight: 300;
    text-align: right;
  }

  & svg {
    height: 1.5625rem;
    width: 1.5625rem;
    margin-right: 1.5625rem;
    margin-left: 1.0625rem;
  }

  & .search-result {
    position: absolute;
    top: 4rem;
    width: 100%;
    z-index: 10;
  }
`

export const SearchResultContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 3.125rem;
  border-bottom: 0.0625rem solid #efefef;
  justify-content: start;
  align-items: center;
  background-color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  & span {
    font-family: "Vazirmatn";
    font-weight: 500;
    font-size: 0.75rem;
    color: #3d195b;
  }

  & div:nth-child(1) {
    display: flex;
    align-items: center;
  }
`

export const FollowButton = styled.button`
  box-sizing: border-box;
  width: 4.5431rem;
  height: 1.875rem;
  background: #ffffff;
  border: 0.0625rem solid #05f1ff;
  border-radius: 0.25rem;
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  color: #05d6e2;
`
