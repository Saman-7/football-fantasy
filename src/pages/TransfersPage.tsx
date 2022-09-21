import { useState } from "react"
import styled from "styled-components"
import ListPlayer from "../components/MainPage/MyTeamPage/ListPlayer/ListPlayer"
import MatchweekStatus from "../components/MainPage/MyTeamPage/MatchweekStatus/MatchweekStatus"
import ViewSwitcher from "../components/MainPage/MyTeamPage/ViewSwitcher/ViewSwitcher"
import PitchTransfer from "../components/MainPage/TransfersPage/PitchTransfer/PitchTransfer"
import SubstitutePlayers from "../components/MainPage/TransfersPage/SubstitutePlayers/SubstitutePlayers"

const TransfersPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;

  & .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .match-week-status {
      margin-bottom: 22px;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

enum VIEW_TRANSFERS {
  pitch,
  list,
}

const TransfersPage = () => {
  const [page, setPage] = useState(VIEW_TRANSFERS.pitch)

  return (
    <TransfersPageContainer>
      <SubstitutePlayers />
      <div className="main">
        <div className="match-week-status">
          <MatchweekStatus />
          <MatchweekStatus />
        </div>
        <ViewSwitcher
          setPitch={() => setPage(VIEW_TRANSFERS.pitch)}
          setList={() => setPage(VIEW_TRANSFERS.list)}
        />
        {page === VIEW_TRANSFERS.pitch ? <PitchTransfer /> : <ListPlayer />}
      </div>
    </TransfersPageContainer>
  )
}

export default TransfersPage
