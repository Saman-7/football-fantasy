import { useEffect, useState } from "react"
import styled from "styled-components"
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

const players = [
  {
    player: {
      web_name: "0",
    },
  },
  {
    player: {
      web_name: "1",
    },
  },
  {
    player: {
      web_name: "2",
    },
  },
  {
    player: {
      web_name: "3",
    },
  },
  {
    player: {
      web_name: "4",
    },
  },
  {
    player: {
      web_name: "5",
    },
  },
  {
    player: {
      web_name: "6",
    },
  },
  {
    player: {
      web_name: "7",
    },
  },
  {
    player: {
      web_name: "8",
    },
  },
  {
    player: {
      web_name: "9",
    },
  },
  {
    player: {
      web_name: "10",
    },
  },
]

interface TypePitchTransferProps {
  playerFormat: Array<number>
}

const PitchTransfer = (props: TypePitchTransferProps) => {
  const [pitchPlayers, setPitchPlayers] = useState<Array<any>>()

  const createComposition = (
    composition: Array<number>,
    players: Array<any>
  ) => {
    const playersInPitch = [...players]
    return composition.map((count) => playersInPitch.splice(0, count))
  }

  useEffect(() => {
    const format = [...props.playerFormat]
    format.unshift(1)
    setPitchPlayers(createComposition(format, players))
  }, [props.playerFormat])

  return (
    <PitchTransferContainer>
      {/* Pitch */}
      <LinePitchSVG className="line-pitch" />
      <PaleGreen>
        <div /> <div /> <div />
      </PaleGreen>

      <LanesPitch>
        {pitchPlayers?.map((lanePlayers, index) => (
          <Lane key={index}>
            {lanePlayers.map(({ player }: any) => (
              <PlayerBox>
                <img src={uniform} alt="uniform" className="uniform" />
                <ArrowUpDownBox className="arrow-up-down-box" />
                <NameBox className={classNames()}>
                  <span>{player.web_name}</span>
                </NameBox>
              </PlayerBox>
            ))}
          </Lane>
        ))}
      </LanesPitch>
    </PitchTransferContainer>
  )
}

export default PitchTransfer
