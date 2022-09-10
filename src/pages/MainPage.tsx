import { useState } from "react"
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
