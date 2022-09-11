import { useEffect, useState } from "react"
import {
  RemainingPlayersContainer,
  RemainingPlayersRightContainer,
} from "./RemainingPlayers.styled"
import RemainingPlayersSVG from "../../svg/remaining-players.svg"
import useMainPageStore from "../../store"
import { numberEnglishToPersian } from "../../utils/numberEnglishToPersion"

const RemainingPlayers = () => {
  const [picked, setPicked] = useState(0)

  const { picks } = useMainPageStore()
  useEffect(() => {
    picks.forEach(
      (pick: {
        is_captain: boolean
        is_vice_captain: boolean
        multiplier: number
        player: {} | null
        _id: string
      }) => {
        if (pick.player !== null) {
          setPicked((prev) => prev + 1)
        }
      }
    )
  }, [picks])

  return (
    <RemainingPlayersContainer>
      <RemainingPlayersRightContainer>
        <img src={RemainingPlayersSVG} alt="Remaining players logo" />

        <span>بازیکن باقی مانده</span>
      </RemainingPlayersRightContainer>

      <span>۱۵/{numberEnglishToPersian(picked.toString())}</span>
    </RemainingPlayersContainer>
  )
}

export default RemainingPlayers
