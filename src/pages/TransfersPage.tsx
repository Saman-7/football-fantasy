import styled from "styled-components"
import MatchweekStatus from "../components/MainPage/MyTeamPage/MatchweekStatus/MatchweekStatus"
import ViewSwitcher from "../components/MainPage/MyTeamPage/ViewSwitcher/ViewSwitcher"
import PitchTransfer from "../components/MainPage/TransfersPage/PitchTransfer/PitchTransfer"
import SubstitutePlayers from "../components/MainPage/TransfersPage/SubstitutePlayers/SubstitutePlayers"
import { PAGE_VIEW_SWITCHER } from "./MyTeamPage"

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

const TransfersPage = () => {
  return (
    <TransfersPageContainer>
      <SubstitutePlayers />
      <div className="main">
        <div className="match-week-status">
          <MatchweekStatus />
          <MatchweekStatus />
        </div>
        <ViewSwitcher
          typePage={PAGE_VIEW_SWITCHER.pitch}
          changePage={() => {}}
        />
        <PitchTransfer />
      </div>
    </TransfersPageContainer>
  )
}

export default TransfersPage
