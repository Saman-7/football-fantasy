import styled from "styled-components";
import Budget from "../components/Budget/Budget";
import Header from "../components/Header/Header";
import MatchweekStatus from "../components/MatchweekStatus/MatchweekStatus";
import Navbar from "../components/Navbar/Navbar";
import Pitch from "../components/Pitch/Pitch";
import RemainingPlayers from "../components/RemainingPlayers/RemainingPlayers";
import SelectPlayer from "../components/SelectPlayer/SelectPlayer";
import ViewSwitcher from "../components/ViewSwitcher/ViewSwitcher";

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
`;

const MainPage = () => {
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
            <ViewSwitcher />
            <RemainingPlayers />
          </div>
          <Pitch />
        </div>
      </div>
    </MainPageContainer>
  );
};

export default MainPage;
