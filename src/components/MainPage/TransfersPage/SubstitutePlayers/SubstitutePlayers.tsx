import classNames from "classnames"
import styled from "styled-components"
import uniform from "../../../../images/uniform.png"
import {
  NameBox,
  PlayerBox,
  SubstitutePlayersContainer,
} from "./SubstitutePlayers.styled"

const SubstitutePlayers = () => {
  return (
    <SubstitutePlayersContainer>
      <div className="title-head">
        <span>بازیکنان ذخیره</span>
      </div>
      <div className="content">
        <PlayerBox>
          <img src={uniform} alt="uniform" className="uniform" />
          <NameBox className={classNames()}>
            <span>saman</span>
          </NameBox>
        </PlayerBox>
        <PlayerBox>
          <img src={uniform} alt="uniform" className="uniform" />
          <NameBox className={classNames()}>
            <span>saman</span>
          </NameBox>
        </PlayerBox>
        <PlayerBox>
          <img src={uniform} alt="uniform" className="uniform" />
          <NameBox className={classNames()}>
            <span>saman</span>
          </NameBox>
        </PlayerBox>
        <PlayerBox>
          <img src={uniform} alt="uniform" className="uniform" />
          <NameBox className={classNames()}>
            <span>saman</span>
          </NameBox>
        </PlayerBox>
      </div>
    </SubstitutePlayersContainer>
  )
}

export default SubstitutePlayers
