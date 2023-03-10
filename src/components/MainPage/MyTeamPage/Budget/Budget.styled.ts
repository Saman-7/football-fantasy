import styled from "styled-components"

export const BudgetContainer = styled.div`
  grid-area: budget;
  width: 17.125rem;
  height: 6.875rem;
  background: linear-gradient(266.07deg, #04f4f0 2.18%, #02fda2 125.43%);
  box-shadow: 0rem 0rem 0.625rem rgba(0, 0, 0, 0.15);
  border-radius: 1rem 1rem 0rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & > span {
    font-weight: 900;
    font-size: 2.5rem;
    color: #3d195b;
  }

  & img {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 480px) {
    width: 45%;
    height: 8.75rem;

    & > span {
      font-weight: 900;
      font-size: 3rem;
      color: #3d195b;
    }
  }
`

export const BudgetRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    font-weight: 900;
    font-size: 0.875rem;
    color: #3d195b;
    margin-top: 0.4125rem;
  }

  @media (max-width: 480px) {
    & img {
      width: 3rem;
      height: 3rem;
    }
    & span {
      font-size: 1.3rem;
    }
  }
`
