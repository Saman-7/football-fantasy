import { useEffect, useState } from "react";
import { ReactComponent as LinePitchSVG } from "../../svg/line-pitch.svg";
import { ReactComponent as PlusSVG } from "../../svg/plus.svg";
import { ReactComponent as DeleteSVG } from "../../svg/delete.svg";
import undress from "../../images/undress.png";
import uniform from "../../images/uniform.png";
import blueDress from "../../images/blue-dress.png";
import { BoxDress, LanePitch, PaleGreen, PitchContainer } from "./Pitch.styled";
import axios from "axios";
import DeletePlayerPopup from "../DeletePlayerPopup/DeletePlayerPopup";

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
  const [listPlayers, setListPlayers] = useState<Array<any>>([]);
  const [activePlayerId, setActivePlayerId] = useState<number>();
  const [deletePlayerId, setDeletePlayerId] = useState<number>();

  const selectedPlayer = (playerId: number) => {
    setActivePlayerId(playerId);
  };

  const selectedDeletePlayer = (playerId: number) => {
    setDeletePlayerId(playerId);
  };

  const handleDeletePlayer = (status: boolean) => {
    if (status && deletePlayerId) {
      const newListPlayer = listPlayers.map((_, index) =>
        index === deletePlayerId ? null : listPlayers[index]
      );
      setListPlayers(newListPlayer);
      setDeletePlayerId(undefined);
      setActivePlayerId(undefined);
    } else {
      setDeletePlayerId(undefined);
    }
  };

  useEffect(() => {
    axios
      .get("http://178.216.248.37:8080/api/v1/managers/dashboard", {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTg3MzRlMjA0MGNjYzRiNDAxODA0NCIsImlhdCI6MTY2MjU1MDI0Nn0.PAGGzig0lKebZDtpOlg4-cZge2DOLk5UIx-SEnMseT4",
        },
      })
      .then((res) => {
        console.log(res.data.data.teamId.picks);
        setListPlayers(res.data.data.teamId.picks);
      });
  }, []);

  return (
    <PitchContainer>
      <LinePitchSVG className="line-pitch" />
      <PaleGreen>
        <div /> <div /> <div />
      </PaleGreen>

      {deletePlayerId && (
        <DeletePlayerPopup
          playerId={deletePlayerId}
          playerName={listPlayers[deletePlayerId].name}
          deletePlayer={handleDeletePlayer}
        />
      )}

      <LanePitch>
        {lanePlayersPitch.map(({ lane, players }) => (
          <div key={lane} className={lane}>
            {players.map((playerId) => {
              const dataPlayer = listPlayers.find(
                (_, index) => index === playerId
              );
              if (!!dataPlayer?.player) {
                return (
                  <div
                    key={playerId}
                    className="box"
                    onClick={() => selectedPlayer(playerId)}
                  >
                    <DeleteSVG
                      className="delete-icon"
                      onClick={() => selectedDeletePlayer(playerId)}
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
                );
              } else if (playerId === activePlayerId) {
                return (
                  <div
                    key={playerId}
                    className="box"
                    onClick={() => selectedPlayer(playerId)}
                  >
                    <img src={blueDress} className="undress" alt="undress" />
                  </div>
                );
              } else {
                return (
                  <div
                    key={playerId}
                    className="box"
                    onClick={() => selectedPlayer(playerId)}
                  >
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
