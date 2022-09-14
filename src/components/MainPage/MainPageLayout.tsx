import { MainPageContainer } from "./MainPageLayout.styled"
import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import { Outlet } from "react-router-dom"

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
