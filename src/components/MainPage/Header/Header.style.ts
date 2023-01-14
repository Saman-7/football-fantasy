import styled from "styled-components"

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 15.625rem;
  border-radius: 0rem 0rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    269.18deg,
    #04f3f4 0.06%,
    #01fc9d 47.08%,
    #05f4f1 99.26%
  );

  & .header-background {
    position: absolute;
    height: 100%;
    right: 0;
  }

  & .three-players {
    height: 15.625rem;
    width: 34.375rem;
  }
`

export const HeaderRightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6.25rem;

  & span {
    font-weight: 900;
    font-size: 3.625rem;
    text-align: center;
    color: #37013b;
    margin-right: 1.5rem;
  }
`

export const PLLogo = styled.img`
  height: 9.375rem;
  width: 7.375rem;
`
