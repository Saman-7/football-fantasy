import styled from "styled-components"
import Logo from "../../images/Vector.svg"

const RemainingPlayersContainer = styled.div`
  width: 273px;
  height: 129px;
  background: linear-gradient(93.79deg, #04f7da -6.31%, #02fda2 118.26%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 16px 16px 0px 0px;
  display: flex;
  justify-content: space-between;
`

const RemainingPlayersFractionContainer = styled.div`
  position: relative;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const RemainingPlayersFraction = styled.span`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  color: #3d195b;
`

const RemainingPlayersLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  right: 18px;
`

const RemainingPlayersLogo = styled.img`
  width: 36.34px;
  height: 40px;
  position: relative;
`

const RemainingPlayersLogoContainerText = styled.span`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  color: #3d195b;
`

const RemainingPlayers = () => {
  return (
    <RemainingPlayersContainer>
      <RemainingPlayersFractionContainer>
        <RemainingPlayersFraction>۱۵/۱۲</RemainingPlayersFraction>
      </RemainingPlayersFractionContainer>

      <RemainingPlayersLogoContainer>
        <RemainingPlayersLogo src={Logo} alt="Player logo vector" />

        <RemainingPlayersLogoContainerText>
          بازیکن باقی مانده
        </RemainingPlayersLogoContainerText>
      </RemainingPlayersLogoContainer>
    </RemainingPlayersContainer>
  )
}

export default RemainingPlayers
