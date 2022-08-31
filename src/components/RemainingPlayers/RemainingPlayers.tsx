import {
  RemainingPlayersContainer,
  RemainingPlayersRightContainer,
} from "./RemainingPlayers.styled"
import RemainingPlayersSVG from "../../svg/remaining-players.svg"

const RemainingPlayers = () => {
  return (
    <RemainingPlayersContainer>
      <RemainingPlayersRightContainer>
        <img src={RemainingPlayersSVG} alt="Remaining players logo" />

        <span>بازیکن باقی مانده</span>
      </RemainingPlayersRightContainer>

      <span>۱۵/۱۲</span>
    </RemainingPlayersContainer>
  )
}

export default RemainingPlayers
