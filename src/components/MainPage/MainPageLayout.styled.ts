import styled from "styled-components"

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .my-team {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    margin-bottom: 50px;
  }

  & .head-pitch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
  }
`
