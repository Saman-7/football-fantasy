import { useEffect, useState } from "react"
import useMainPageStore from "../store"
import Budget from "../components/MainPage/MyTeamPage/Budget/Budget"
import ListPlayer from "../components/MainPage/MyTeamPage/ListPlayer/ListPlayer"
import MatchweekStatus from "../components/MainPage/MyTeamPage/MatchweekStatus/MatchweekStatus"
import Pitch from "../components/MainPage/MyTeamPage/Pitch/Pitch"
import RemainingPlayers from "../components/MainPage/MyTeamPage/RemainingPlayers/RemainingPlayers"
import SelectPlayer from "../components/MainPage/MyTeamPage/SelectPlayer/SelectPlayer"
import ViewSwitcher from "../components/MainPage/MyTeamPage/ViewSwitcher/ViewSwitcher"
import styled from "styled-components"
import useFetcher from "../api/useFetcher"
import Warning from "../components/Warning/Warning"
import Loading from "../components/loading/AlternativeLoading/Loading"
import { getDashboardApi } from "../api/requests"

const MyTeamPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 3.125rem;
  position: relative;

  & .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .head-pitch {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 2.5rem;
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
  const [errorText, setErrorText] = useState<string | undefined>()
  const { setPicks, setBudget, setRemainPlayer } = useMainPageStore()

  const { isLoading, error, data } = useFetcher(() =>
    getDashboardApi().then((res) => {
      return res.data.data.data
    })
  )

  useEffect(() => {
    if (!data) {
      if (error)
        setErrorText("سرور در درسترس نیست ، لطفا بعدا امتحان کنید ... !")
    } else {
      setPicks(data.manager.teamId.picks)
      setBudget(data.manager.budget)
      setRemainPlayer(data.nb)
    }
  }, [data, error, setBudget, setPicks, setRemainPlayer])

  return (
    <MyTeamPageContainer>
      {isLoading && <Loading />}
      {errorText && <Warning text={errorText} display={setErrorText} />}

      <SelectPlayer />

      <div className="main">
        <MatchweekStatus width={29.5} />

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
