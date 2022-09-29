import styled from "styled-components"

export const RemainingPlayersContainer = styled.div`
  grid-area: remain;
  width: 17.0625rem;
  height: 6.875rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(93.79deg, #04f7da -6.31%, #02fda2 118.26%);
  box-shadow: 0rem 0rem 0.625rem rgba(0, 0, 0, 0.15);
  border-radius: 1rem 1rem 0rem 0rem;

  & > span {
    font-weight: 900;
    font-size: 2.25rem;
    color: #3d195b;
  }
`

export const RemainingPlayersRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    width: 2.2713rem;
    height: 2.5rem;
  }

  & span {
    font-weight: 900;
    font-size: 0.875rem;
    line-height: 1.375rem;
    color: #3d195b;
    margin-top: 0.5rem;
  }

  @media (max-width: 480px) {
    & span {
      font-size: 1.2rem;
    }
  }
`
