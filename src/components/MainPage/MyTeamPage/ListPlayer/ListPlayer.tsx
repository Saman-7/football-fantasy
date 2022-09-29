import UniformPNG from "../../../../images/uniform.png"
import { ReactComponent as LeagueSVG } from "../../../../svg/league.svg"
import { ReactComponent as StripesSVG } from "../../../../svg/stripes.svg"
import { convertLanesToPersian } from "../../../../utils/convertLanes"
import {
  BoxList,
  HeaderList,
  ListContainer,
  ListPlayerContainer,
  RowList,
  Sidebar,
} from "./ListPlayer.styled"
import useMainPageStore from "../../../../store"

interface TypePropsListPlayer {
  lanePlayersId: Array<any>
}

const ListPlayer = (props: TypePropsListPlayer) => {
  const { picks } = useMainPageStore()

  return (
    <ListPlayerContainer>
      <ListContainer>
        <HeaderList>
          <div></div>
          <div>
            <span>عملکرد</span>
          </div>
          <div>
            <span>قیمت</span>
          </div>
        </HeaderList>

        {props.lanePlayersId.map(({ lane, players }) => (
          <BoxList>
            <div className="title">
              <h3>{convertLanesToPersian(lane)}</h3>
            </div>
            {players.map((playerId: number) => {
              const dataPlayer = picks.find((_, index) => index === playerId)
              return (
                <RowList>
                  <div className="name-player">
                    <span>
                      {dataPlayer?.player?.web_name
                        ? dataPlayer.player.web_name
                        : "none"}
                    </span>
                  </div>
                  <div>
                    <span>
                      {dataPlayer?.player?.form ? dataPlayer.player.form : 0}
                    </span>
                  </div>
                  <div>
                    <span>
                      {dataPlayer?.player?.now_cost
                        ? dataPlayer.player.now_cost
                        : 0}
                    </span>
                  </div>
                </RowList>
              )
            })}
          </BoxList>
        ))}
      </ListContainer>

      <Sidebar>
        <img src={UniformPNG} alt="uniform" className="uniform-img" />
        <LeagueSVG className="league-svg" />
        <StripesSVG className="stripes-svg" />
      </Sidebar>
    </ListPlayerContainer>
  )
}

export default ListPlayer
