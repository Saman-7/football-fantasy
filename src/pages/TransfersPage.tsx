import { useState } from "react"
import styled from "styled-components"
import ListPlayer from "../components/MainPage/MyTeamPage/ListPlayer/ListPlayer"
import MatchweekStatus from "../components/MainPage/MyTeamPage/MatchweekStatus/MatchweekStatus"
import ViewSwitcher from "../components/MainPage/MyTeamPage/ViewSwitcher/ViewSwitcher"
import Composition from "../components/MainPage/TransfersPage/Composition"
import PitchTransfer from "../components/MainPage/TransfersPage/PitchTransfer/PitchTransfer"
import SubstitutePlayers from "../components/MainPage/TransfersPage/SubstitutePlayers/SubstitutePlayers"
import TransferDeadline from "../components/MainPage/TransfersPage/TransferDeadline/TransferDeadline"

const TransfersPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 3.125rem;

  & .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    & .match-week-status {
      margin-bottom: 1.375rem;
      margin-top: 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    justify-content: end;
    align-items: center;

    & .main {
      align-items: center;
    }
    & .match-week-status {
      flex-direction: column;
    }
  }
`

enum VIEW_TRANSFERS {
  pitch,
  list,
}

const lanePlayersId = [
  {
    lane: "GK",
    players: [0],
  },
  {
    lane: "DEF",
    players: [1, 2, 3, 4],
  },
  {
    lane: "MID",
    players: [5, 6, 7, 8],
  },
  {
    lane: "ATT",
    players: [9, 10],
  },
]

const TransfersPage = () => {
  const [page, setPage] = useState(VIEW_TRANSFERS.pitch)
  const [PlayerFormat, setPlayerFormat] = useState<Array<number>>([4, 4, 2])

  return (
    <TransfersPageContainer>
      <SubstitutePlayers />
      <div className="main">
        <div className="match-week-status">
          <MatchweekStatus width={23.25} />
          <TransferDeadline width={23.25} />
        </div>

        <ViewSwitcher
          setPitch={() => setPage(VIEW_TRANSFERS.pitch)}
          setList={() => setPage(VIEW_TRANSFERS.list)}
        />

        <Composition setPlayerFormat={setPlayerFormat} />

        {page === VIEW_TRANSFERS.pitch ? (
          <PitchTransfer playerFormat={PlayerFormat} />
        ) : (
          <ListPlayer lanePlayersId={lanePlayersId} />
        )}
      </div>
    </TransfersPageContainer>
  )
}

export default TransfersPage
