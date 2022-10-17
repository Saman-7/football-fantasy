import styled from "styled-components"

interface TypePropsMatchweekStatusContainer {
  width: number
}
export const MatchweekStatusContainer = styled.div<TypePropsMatchweekStatusContainer>`
  grid-area: week;
  width: ${({ width }) => width}rem;
  height: 2.1875rem;
  background: #3d195b;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  word-spacing: 1px;

  @media (max-width: 480px) {
    height: 4.375rem;
    width: 52rem;
    margin: 0.625rem 0rem;
  }
`

export const MatchweekDateContainer = styled.div`
  & span {
    font-weight: 800;
    font-size: 0.875rem;
    color: #f7f7f7;
  }

  @media (max-width: 480px) {
    & span {
      font-size: 1.75rem;
    }
  }
`

export const MatchweekNumberContainer = styled.div`
  & span {
    font-weight: 800;
    font-size: 1rem;
    color: #00ff87;
  }

  @media (max-width: 480px) {
    & span {
      font-size: 1.75rem;
    }
  }
`
