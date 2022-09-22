import styled from "styled-components"

interface TypePropsMatchweekStatusContainer {
  width: number
}
export const MatchweekStatusContainer = styled.div<TypePropsMatchweekStatusContainer>`
  grid-area: week;
  width: ${({ width }) => width}px;
  height: 2.1875rem;
  background: #3d195b;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
