import styled from "styled-components";

export const RemainingPlayersContainer = styled.div`
  grid-area: remain;
  width: 17.0625rem;
  height: 8.0625rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(93.79deg, #04f7da -6.31%, #02fda2 118.26%);
  box-shadow: 0rem 0rem 0.625rem rgba(0, 0, 0, 0.15);
  border-radius: 1rem 1rem 0rem 0rem;

  & > span {
    font-weight: 900;
    font-size: 36px;
    color: #3d195b;
  }
`;

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
    font-size: 14px;
    line-height: 22px;
    color: #3d195b;
  }
`;
