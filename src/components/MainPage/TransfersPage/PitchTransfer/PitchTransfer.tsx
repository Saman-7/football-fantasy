import { useEffect, useState } from "react"
import { ReactComponent as LinePitchSVG } from "../../../../svg/line-pitch.svg"
import uniform from "../../../../images/uniform.png"
import { ReactComponent as ArrowUpDownBox } from "../../../../svg/arrow-up-down-box.svg"
import classNames from "classnames"
import {
  Lane,
  LanesPitch,
  NameBox,
  PaleGreen,
  PitchTransferContainer,
  PlayerBox,
} from "./PitchTransfer.styled"
import useMainPageStore from "../../../../store"

interface TypePropsPitchTransfer {
  outPlayer: number | undefined
  setOutPlayer: (index: number | undefined) => void
  playerFormat: Array<number>
}

const PitchTransfer = ({
  outPlayer,
  setOutPlayer,
  playerFormat,
}: TypePropsPitchTransfer) => {
  const [pitchPlayers, setPitchPlayers] = useState<Array<any>>([])
  const { picks } = useMainPageStore()

  const createComposition = (composition: Array<number>) => {
    const playersInPitch = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return composition.map((count) => playersInPitch.splice(0, count))
  }

  useEffect(() => {
    setPitchPlayers(createComposition([1, ...playerFormat]))
  }, [playerFormat])

  const selectOutPlayer = (indexPlayer: number) => {
    if (indexPlayer === outPlayer) {
      setOutPlayer(undefined)
    } else {
      setOutPlayer(indexPlayer)
    }
  }

  return (
    <PitchTransferContainer>
      <LinePitchSVG className="line-pitch" />
      <PaleGreen>
        <div /> <div /> <div />
      </PaleGreen>

      <LanesPitch>
        {pitchPlayers.map((lanePlayers, index) => (
          <Lane key={index}>
            {picks[0] &&
              lanePlayers.map((indexPlayer: number) => {
                return (
                  <PlayerBox key={indexPlayer}>
                    <img src={uniform} alt="uniform" className="uniform" />
                    <ArrowUpDownBox
                      className="arrow-up-down-box"
                      onClick={() => selectOutPlayer(indexPlayer)}
                    />
                    <NameBox
                      className={classNames({
                        active: indexPlayer === outPlayer,
                      })}
                    >
                      <span>{picks[indexPlayer].player?.web_name}</span>
                    </NameBox>
                  </PlayerBox>
                )
              })}
          </Lane>
        ))}
      </LanesPitch>
    </PitchTransferContainer>
  )
}

export default PitchTransfer
