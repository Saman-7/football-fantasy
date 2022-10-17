import styled from "styled-components"

export const SubstitutePlayersContainer = styled.div`
  height: 48rem;
  width: 17.0625rem;
  border-radius: 1rem 1rem 0rem 0rem;
  box-shadow: 0rem 0rem 0.625rem rgba(0, 0, 0, 0.12);
  margin-left: 1.5rem;

  & .title-head {
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

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 44.625rem;
    padding-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    margin-top: 1rem;

    & .title-head {
      width: 50%;
      margin: auto;
    }
    & .content {
      flex-direction: row;
      height: 11.5rem;
    }
  }
`

export const PlayerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .uniform {
    height: 6.25rem;
    width: 5.0625rem;
  }

  @media (max-width: 480px) {
    & .uniform {
      height: 7.25rem;
      width: 6.0625rem;
    }
  }
`

export const NameBox = styled.div`
  height: 1.5625rem;
  width: 7.5rem;
  border-radius: 0.25rem;
  background: #37013b;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -1.5625rem;

  & span {
    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    color: white;
  }

  &.active {
    background-color: #05f1ff;
    & span {
      color: #3d185b;
    }
  }

  @media (max-width: 480px) {
    height: 1.6rem;
    width: 8rem;
    & span {
      font-size: 1rem;
    }
  }
`
