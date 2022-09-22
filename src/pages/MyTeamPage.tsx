import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useMainPageStore from "../store"
import Budget from "../components/MainPage/MyTeamPage/Budget/Budget"
import ListPlayer from "../components/MainPage/MyTeamPage/ListPlayer/ListPlayer"
import MatchweekStatus from "../components/MainPage/MyTeamPage/MatchweekStatus/MatchweekStatus"
import Pitch from "../components/MainPage/MyTeamPage/Pitch/Pitch"
import RemainingPlayers from "../components/MainPage/MyTeamPage/RemainingPlayers/RemainingPlayers"
import SelectPlayer from "../components/MainPage/MyTeamPage/SelectPlayer/SelectPlayer"
import ViewSwitcher from "../components/MainPage/MyTeamPage/ViewSwitcher/ViewSwitcher"
import styled from "styled-components"

const MyTeamPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 50px;

  & .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .head-pitch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    width: 100%;
  }
`

export enum VIEW_MY_TEAM {
  pitch,
  list,
}

const lanePlayersId = [
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

const MyTeamPage = () => {
  const [page, setPage] = useState(VIEW_MY_TEAM.pitch)
  const { setPicks, setBudget, setRemainPlayer } = useMainPageStore()

  const navigate = useNavigate()

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token") || "{}")

    if (Object.keys(token).length === 0) navigate("/signin")

    axios
      .get("http://178.216.248.37:8080/api/v1/managers/dashboard", {
        headers: {
          token: token,
        },
      })
      .then((res) => res.data.data)
      .then((data) => {
        setPicks(data.manager.teamId.picks)
        setBudget(data.manager.budget)
        setRemainPlayer(data.nb)
      })
  }, [navigate, setBudget, setPicks, setRemainPlayer])

  return (
    <MyTeamPageContainer>
      <SelectPlayer />

      <div className="main">
        <MatchweekStatus width={472} />

        <div className="head-pitch">
          <Budget />
          <ViewSwitcher
            setPitch={() => setPage(VIEW_MY_TEAM.pitch)}
            setList={() => setPage(VIEW_MY_TEAM.list)}
          />
          <RemainingPlayers />
        </div>

        {page === VIEW_MY_TEAM.pitch ? (
          <Pitch />
        ) : (
          <ListPlayer lanePlayersId={lanePlayersId} />
        )}
      </div>
    </MyTeamPageContainer>
  )
}

export default MyTeamPage
