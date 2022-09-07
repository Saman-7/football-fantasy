import { useEffect, useState } from "react"
import UniformPNG from "../../images/uniform.png"
import { ReactComponent as LeagueSVG } from "../../svg/league.svg"
import { ReactComponent as StripesSVG } from "../../svg/stripes.svg"
import { convertLanesToPersian } from "../../utils/convertLanes"
import {
  BoxList,
  HeaderList,
  ListContainer,
  ListPlayerContainer,
  RowList,
  Sidebar,
} from "./ListPlayer.styled"
import axios from "axios"

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

const ListPlayer = () => {
  const [listPlayers, setListPlayers] = useState<Array<any>>([])

  useEffect(() => {
    axios.get("/pitch").then((res) => setListPlayers(res.data))
  }, [])

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

        {lanePlayersPitch.map(({ lane, players }) => (
          <BoxList>
            <div className="title">
              <h3>{convertLanesToPersian(lane)}</h3>
            </div>
            {players.map((playerId) => {
              const player = listPlayers.find((_, index) => index === playerId)
              return (
                <RowList>
                  <div className="name-player">
                    <span>{player?.name ? player.name : "none"}</span>
                  </div>
                  <div>
                    <span>{player?.form ? player.form : 0}</span>
                  </div>
                  <div>
                    <span>{player?.price ? player.price : 0}</span>
                  </div>
                </RowList>
              )
            })}
          </BoxList>
        ))}
      </ListContainer>

      <Sidebar>
        <img src={UniformPNG} alt="uniform" className="uniform-img" />
        <LeagueSVG />
        <StripesSVG />
      </Sidebar>
    </ListPlayerContainer>
  )
}

export default ListPlayer
