import styled from "styled-components"

export const HeaderContainer = styled.div`
  width: 100%;
  height: 15.625rem;
  border-radius: 0rem 0rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  background: url("/images/header-background.png"),
    linear-gradient(269.18deg, #04f3f4 0.06%, #01fc9d 47.08%, #05f4f1 99.26%);
  background-repeat: no-repeat;
  background-position: right;
`

export const HeaderRightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-family: "Vazirmatn";
    font-style: normal;
    font-weight: 900;
    font-size: 58px;
    text-align: center;
    color: #37013b;
  }
`

export const PLLogo = styled.img`
  margin-right: 6.25rem;
  margin-top: 2.313rem;
  margin-bottom: 3.938rem;
  margin-left: 1.5rem;
`
