import UniformPNG from "../../images/uniform.png";
import { ReactComponent as LeagueSVG } from "../../svg/league.svg";
import { ReactComponent as StripesSVG } from "../../svg/stripes.svg";
import { convertLanesToPersian } from "../../utils/convertLanes";
import {
  BoxList,
  HeaderList,
  ListContainer,
  ListPlayerContainer,
  RowList,
  Sidebar,
} from "./ListPlayer.styled";

const allPlayers = [
  { id: 1, name: "Cancelo", rating: 7.5, price: 9 },
  { id: 2 },
  { id: 3, name: "Cancelo", rating: 7.5, price: 9 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
];

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
];

const ListPlayer = () => {
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
              const player = allPlayers.find((p) => p.id === playerId);

              return (
                <RowList>
                  <div className="name-player">
                    <span>{player?.name ? player.name : "none"}</span>
                  </div>
                  <div>
                    <span>{player?.rating ? player.rating : 0}</span>
                  </div>
                  <div>
                    <span>{player?.price ? player.price : 0}</span>
                  </div>
                </RowList>
              );
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
  );
};

export default ListPlayer;
