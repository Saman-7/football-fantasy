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

export enum PAGE_VIEW_SWITCHER {
  pitch,
  list,
}

const MyTeamPage = () => {
  const [page, setPage] = useState(PAGE_VIEW_SWITCHER.pitch)

  const navigate = useNavigate()

  const state = useMainPageStore()

  const { setPicks, setBudget, setRemainPlayer } = state

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
  }, [])

  return (
    <div className="my-team">
      <SelectPlayer />

      <div>
        <MatchweekStatus />
        <div className="head-pitch">
          <Budget />
          <ViewSwitcher typePage={page} changePage={setPage} />
          <RemainingPlayers />
        </div>
        {page === PAGE_VIEW_SWITCHER.pitch ? <Pitch /> : <ListPlayer />}
      </div>
    </div>
  )
}

export default MyTeamPage
