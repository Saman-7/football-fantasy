import { useEffect, useState } from "react"
import {
  RemainingPlayersContainer,
  RemainingPlayersRightContainer,
} from "./RemainingPlayers.styled"
import RemainingPlayersSVG from "../../../../svg/remaining-players.svg"
import useMainPageStore from "../../../../store"
import { numberEnglishToPersian } from "../../../../utils/numberEnglishToPersion"

const RemainingPlayers = () => {
  const { remainPlayer } = useMainPageStore()

  return (
    <RemainingPlayersContainer>
      <RemainingPlayersRightContainer>
        <img src={RemainingPlayersSVG} alt="Remaining players logo" />

        <span>بازیکن باقی مانده</span>
      </RemainingPlayersRightContainer>

      <span>۱۵/{numberEnglishToPersian((15 - remainPlayer).toString())}</span>
    </RemainingPlayersContainer>
  )
}

export default RemainingPlayers
