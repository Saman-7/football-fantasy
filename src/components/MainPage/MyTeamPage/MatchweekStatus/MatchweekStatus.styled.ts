import styled from "styled-components"

export const MatchweekStatusContainer = styled.div`
  grid-area: week;
  /* width: 29.5rem;
  height: 2.1875rem; */
  height: 35px;
  width: 372px;
  background: #3d195b;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  word-spacing: 1px;
`

export const MatchweekDateContainer = styled.div`
  & span {
    font-weight: 800;
    font-size: 14px;
    color: #f7f7f7;
  }
`

export const MatchweekNumberContainer = styled.div`
  & span {
    font-weight: 800;
    font-size: 1rem;
    color: #00ff87;
  }
`
