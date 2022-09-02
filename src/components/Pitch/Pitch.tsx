import { useState } from "react";
import { ReactComponent as LinePitchSVG } from "../../svg/line-pitch.svg";
import { ReactComponent as PlusSVG } from "../../svg/plus.svg";
import { ReactComponent as DeleteSVG } from "../../svg/delete.svg";
import undress from "../../images/undress.png";
import uniform from "../../images/uniform.png";
import blueDress from "../../images/blue-dress.png";
import { BoxDress, LanePitch, PaleGreen, PitchContainer } from "./Pitch.styled";

const allPlayers = [
  { id: 0, name: "Cancelo", rating: 7.5 },
  { id: 1 },
  { id: 2, name: "Cancelo", rating: 7.5 },
  { id: 3 },
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

const Pitch = () => {
  const [activePlayer, setActivePlayer] = useState(1);

  return (
    <PitchContainer>
      <LinePitchSVG className="line-pitch" />
      <PaleGreen>
        <div /> <div /> <div />
      </PaleGreen>

      <LanePitch>
        {lanePlayersPitch.map(({ lane, players }) => (
          <div className={lane}>
            {players.map((playerId) => {
              const player = allPlayers.find((p) => p.id === playerId);
              if (!!player?.name) {
                return (
                  <div className="box">
                    <DeleteSVG className="delete-icon" />
                    <img src={uniform} className="uniform" alt="uniform" />
                    <BoxDress>
                      <div className="title">
                        <span>{player?.name}</span>
                      </div>
                      <div className="rating">
                        <span>{player?.rating}</span>
                      </div>
                    </BoxDress>
                  </div>
                );
              } else if (playerId === activePlayer) {
                return (
                  <div>
                    <div className="box">
                      <img src={blueDress} className="undress" alt="undress" />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="box">
                    <img src={undress} className="undress" alt="undress" />
                    <PlusSVG className="plus-icon" />
                  </div>
                );
              }
            })}
          </div>
        ))}
      </LanePitch>
    </PitchContainer>
  );
};

export default Pitch;
