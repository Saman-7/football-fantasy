import classNames from "classnames"
import uniform from "../../../../images/uniform.png"
import useMainPageStore from "../../../../store"
import {
  NameBox,
  PlayerBox,
  SubstitutePlayersContainer,
} from "./SubstitutePlayers.styled"
import { changePlayerPitch, getDashboardApi } from "../../../../api/requests"
import { useState } from "react"
import Warning from "../../../Warning/Warning"
import { checkPositionPlayer } from "../../../../utils/checkPositionPlayer"

interface TypePropsSubstitutePlayer {
  outPlayer: number | undefined
  setOutPlayer: (index: number | undefined) => void
}

const SubstitutePlayers = ({
  outPlayer,
  setOutPlayer,
}: TypePropsSubstitutePlayer) => {
  const [errorText, setErrorText] = useState<string | undefined>()

  const { picks, setPicks } = useMainPageStore()

  const changePlayer = (indexPlayer: number, id: string) => {
    if (outPlayer !== undefined) {
      changePlayerPitch(indexPlayer, id, outPlayer, picks[outPlayer].player._id)
        .then((_) => {
          getDashboardApi().then((res) => {
            const { manager } = res.data.data
            setPicks(manager.teamId.picks)
            setOutPlayer(undefined)
          })
        })
        .catch((err) => {
          console.log(err)
          if (err.response.status === 417) {
            setErrorText("بازیکن حتما باید سِمَت مشابه داشته باشد !")
          }
        })
    }
  }

  const isChangeablePlayer = (
    inIndex: number,
    outIndex: number | undefined
  ) => {
    return outIndex !== undefined && checkPositionPlayer(inIndex, outIndex)
  }

  return (
    <SubstitutePlayersContainer>
      {errorText && <Warning text={errorText} display={setErrorText} />}

      <div className="title-head">
        <span>بازیکنان ذخیره</span>
      </div>
      <div className="content">
        {picks[0] &&
          [...picks].splice(11).map(({ player }, index) => (
            <PlayerBox
              key={index}
              onClick={() => changePlayer(index + 11, player?._id)}
              className={classNames({
                active: isChangeablePlayer(index + 11, outPlayer),
                inActive:
                  outPlayer !== undefined &&
                  !isChangeablePlayer(index + 11, outPlayer),
              })}
            >
              <img src={uniform} alt="uniform" className="uniform" />
              <NameBox
                className={classNames({
                  active: isChangeablePlayer(index + 11, outPlayer),
                })}
              >
                <span>{player?.web_name}</span>
              </NameBox>
            </PlayerBox>
          ))}
      </div>
    </SubstitutePlayersContainer>
  )
}

export default SubstitutePlayers
