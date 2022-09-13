import { useEffect, useState } from "react"
import { ReactComponent as LinePitchSVG } from "../../svg/line-pitch.svg"
import { ReactComponent as PlusSVG } from "../../svg/plus.svg"
import { ReactComponent as DeleteSVG } from "../../svg/delete.svg"
import undress from "../../images/undress.png"
import uniform from "../../images/uniform.png"
import blueDress from "../../images/blue-dress.png"
import { BoxDress, LanePitch, PaleGreen, PitchContainer } from "./Pitch.styled"
import DeletePlayerPopup from "../DeletePlayerPopup/DeletePlayerPopup"
import useMainPageStore from "../../store"
import { filterStringToNumber } from "../../utils/filterStringToNumber"

const lanePlayersPitch = [
  {
    lane: "GK",
    players: [0, 1],
  },
  {
    lane: "DEF",
    players: [2, 3, 4, 5, 6],
  },
  {
    lane: "MID",
    players: [7, 8, 9, 10, 11],
  },
  {
    lane: "ATT",
    players: [12, 13, 14],
  },
]

const Pitch = () => {
  const [activePlayerId, setActivePlayerId] = useState<number>()
  const [deletePlayerId, setDeletePlayerId] = useState<number>()
  const { picks } = useMainPageStore()

  const handleDeletePlayer = (status: boolean) => {
    // if (status && deletePlayerId) {
    //   const newListPlayer = listPlayers.map((_, index) =>
    //     index === deletePlayerId ? null : listPlayers[index]
    //   )
    //   setListPlayers(newListPlayer)
    //   setDeletePlayerId(undefined)
    //   setActivePlayerId(undefined)
    // } else {
    //   setDeletePlayerId(undefined)
    // }
  }

  const { setPisition, setFilter } = useMainPageStore()
  useEffect(() => {
    if (activePlayerId !== undefined) {
      setPisition(activePlayerId)

      const dataLane = lanePlayersPitch.find((dataLane) => {
        const ret = dataLane.players.find(
          (playerId) => playerId === activePlayerId
        )
        if (ret !== undefined) return true
        else return false
      })!

      setFilter(filterStringToNumber(dataLane.lane))
    }
  }, [activePlayerId])

  return (
    <PitchContainer>
      <LinePitchSVG className="line-pitch" />
      <PaleGreen>
        <div /> <div /> <div />
      </PaleGreen>

      {deletePlayerId && (
        <DeletePlayerPopup
          playerId={deletePlayerId}
          playerName={picks[deletePlayerId].name}
          deletePlayer={handleDeletePlayer}
        />
      )}

      <LanePitch>
        {lanePlayersPitch.map(({ lane, players }) => (
          <div key={lane} className={lane}>
            {players.map((playerId) => {
              const dataPlayer = picks.find((_, index) => index === playerId)
              if (!!dataPlayer?.player) {
                return (
                  <div key={playerId} className="box">
                    <DeleteSVG
                      className="delete-icon"
                      onClick={() => setDeletePlayerId(playerId)}
                    />
                    <img src={uniform} className="uniform" alt="uniform" />
                    <BoxDress>
                      <div className="title">
                        <span>{dataPlayer.player.web_name}</span>
                      </div>
                      <div className="rating">
                        <span>{dataPlayer.player.form}</span>
                      </div>
                    </BoxDress>
                  </div>
                )
              } else if (playerId === activePlayerId) {
                return (
                  <div
                    key={playerId}
                    className="box"
                    onClick={() => setActivePlayerId(playerId)}
                  >
                    <img src={blueDress} className="undress" alt="undress" />
                  </div>
                )
              } else {
                return (
                  <div
                    key={playerId}
                    className="box"
                    onClick={() => setActivePlayerId(playerId)}
                  >
                    <img src={undress} className="undress" alt="undress" />
                    <PlusSVG className="plus-icon" />
                  </div>
                )
              }
            })}
          </div>
        ))}
      </LanePitch>
    </PitchContainer>
  )
}

export default Pitch
