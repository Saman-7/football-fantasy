import styled from "styled-components"
import Profile from "../components/MainPage/Profile"

const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-bottom: 3.125rem;
`

const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <Profile />
    </ProfilePageContainer>
  )
}

export default ProfilePage
