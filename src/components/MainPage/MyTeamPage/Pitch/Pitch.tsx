import { useEffect, useState } from "react"
import { ReactComponent as LinePitchSVG } from "../../../../svg/line-pitch.svg"
import { ReactComponent as PlusSVG } from "../../../../svg/plus.svg"
import { ReactComponent as DeleteSVG } from "../../../../svg/delete.svg"
import undress from "../../../../images/undress.png"
import uniform from "../../../../images/uniform.png"
import blueDress from "../../../../images/blue-dress.png"
import { BoxDress, LanePitch, PaleGreen, PitchContainer } from "./Pitch.styled"
import DeletePlayerPopup from "../DeletePlayerPopup/DeletePlayerPopup"
import useMainPageStore from "../../../../store"
import { filterStringToNumber } from "../../../../utils/filterStringToNumber"
import Loading from "../../../loading/AlternativeLoading/Loading"
import { deletePlayerApi, getDashboardApi } from "../../../../api/requests"

const lanePlayersPitch = [
  {
    lane: "GK",
    players: [0, 11],
  },
  {
    lane: "DEF",
    players: [1, 2, 3, 4, 12],
  },
  {
    lane: "MID",
    players: [5, 6, 7, 8, 13],
  },
  {
    lane: "ATT",
    players: [9, 10, 14],
  },
]

const Pitch = () => {
  const [activePlayerId, setActivePlayerId] = useState<number>()
  const [deletePlayerId, setDeletePlayerId] = useState<number>()
  const [isLoading, setIsLoading] = useState(false)

  const { picks, setPicks, setBudget, setRemainPlayer } = useMainPageStore()

  const handleDeletePlayer = (status: boolean) => {
    if (status && deletePlayerId !== undefined) {
      setIsLoading(true)

      const idPlayer = picks[deletePlayerId].player._id

      deletePlayerApi(idPlayer, deletePlayerId)
        .then((_) => {
          getDashboardApi()
            .then((res) => {
              const { manager, nb } = res.data.data
              setPicks(manager.teamId.picks)
              setBudget(manager.budget)
              setRemainPlayer(nb)
              setDeletePlayerId(undefined)
              setActivePlayerId(undefined)
              setIsLoading(false)
            })
            .catch((err) => {
              console.log(err)
              setDeletePlayerId(undefined)
              setIsLoading(false)
            })
        })
        .catch((err) => {
          console.log(err)
          setDeletePlayerId(undefined)
          setIsLoading(false)
        })
    } else {
      setDeletePlayerId(undefined)
    }
  }

  const { setPosition, setFilter } = useMainPageStore()
  useEffect(() => {
    if (activePlayerId !== undefined) {
      setPosition(activePlayerId)

      const dataLane = lanePlayersPitch.find((dataLane) => {
        const ret = dataLane.players.find(
          (playerId) => playerId === activePlayerId
        )
        if (ret !== undefined) return true
        else return false
      })!

      setFilter(filterStringToNumber(dataLane.lane))
    }
  }, [activePlayerId, setFilter, setPosition])

  return (
    <PitchContainer>
      {isLoading && <Loading />}

      <LinePitchSVG className="line-pitch" />
      <PaleGreen>
        <div /> <div /> <div />
      </PaleGreen>

      {deletePlayerId !== undefined && !isLoading && (
        <DeletePlayerPopup
          playerId={deletePlayerId}
          playerName={picks[deletePlayerId].player.web_name}
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
                    onClick={() => {
                      setActivePlayerId(undefined)
                      setPosition(undefined)
                    }}
                  >
                    <img
                      src={blueDress}
                      className="blue-dress"
                      alt="blueDress"
                    />
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
