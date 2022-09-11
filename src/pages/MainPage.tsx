import axios from "axios"
import { useEffect, useState } from "react"
import useMainPageStore from "../store"
import styled from "styled-components"
import Budget from "../components/Budget/Budget"
import Header from "../components/Header/Header"
import ListPlayer from "../components/ListPlayer/ListPlayer"
import MatchweekStatus from "../components/MatchweekStatus/MatchweekStatus"
import Navbar from "../components/Navbar/Navbar"
import Pitch from "../components/Pitch/Pitch"
import RemainingPlayers from "../components/RemainingPlayers/RemainingPlayers"
import SelectPlayer from "../components/SelectPlayer/SelectPlayer"
import ViewSwitcher from "../components/ViewSwitcher/ViewSwitcher"
import { useNavigate } from "react-router-dom"

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .main {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    margin-bottom: 50px;
  }

  & .head-pitch {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export enum PAGE_VIEW_SWITCHER {
  pitch,
  list,
}

const MainPage = () => {
  const [page, setPage] = useState(PAGE_VIEW_SWITCHER.pitch)

  const navigate = useNavigate()

  const state = useMainPageStore()

  const { setPicks, setBudget } = state

  useEffect(() => {
    const token = localStorage.getItem("token") || ""

    if (token === "" || token === undefined) navigate("/signin")

    axios
      .get("http://178.216.248.37:8080/api/v1/managers/dashboard", {
        headers: {
          token: token,
        },
      })
      .then((res) => res.data.data)
      .then((data) => {
        setPicks(data.teamId.picks)
        setBudget(data.budget)
      })
  }, [])

  return (
    <MainPageContainer>
      <Header />
      <Navbar />

      <div className="main">
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
    </MainPageContainer>
  )
}

export default MainPage
