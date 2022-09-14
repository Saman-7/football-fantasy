import styled from "styled-components";

export const BudgetContainer = styled.div`
  grid-area: budget;
  width: 17.125rem;
  height: 8.0625rem;
  background: linear-gradient(266.07deg, #04f4f0 2.18%, #02fda2 125.43%);
  box-shadow: 0rem 0rem 0.625rem rgba(0, 0, 0, 0.15);
  border-radius: 1rem 1rem 0rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & > span {
    font-weight: 900;
    font-size: 40px;
    color: #3d195b;
  }

  & img {
    width: 48px;
    height: 48px;
  }
`;

export const BudgetRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    font-weight: 900;
    font-size: 14px;
    color: #3d195b;
    margin-top: 0.3125rem;
  }
`;
