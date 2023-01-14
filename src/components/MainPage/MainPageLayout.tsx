import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainPageLayout = () => {
  return (
    <MainPageContainer>
      <Header />
      <Navbar />

      <Outlet />
    </MainPageContainer>
  )
}

export default MainPageLayout
