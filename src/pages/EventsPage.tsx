import styled from "styled-components"
import FriendsSearchBar from "../components/MainPage/EventsPage/FriendsSearchBar/FriendsSearchBar"
import LatesEvents from "../components/MainPage/EventsPage/LatesEvents/LatesEvents"
import YourFriends from "../components/MainPage/EventsPage/YourFriends/YourFriends"

const EventPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;

  & .main {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    margin-top: 40px;
    margin-bottom: 50px;
    width: 100%;
  }
`

const EventPage = () => {
  return (
    <EventPageContainer>
      <FriendsSearchBar />
      <div className="main">
        <LatesEvents />
        <YourFriends />
      </div>
    </EventPageContainer>
  )
}

export default EventPage
