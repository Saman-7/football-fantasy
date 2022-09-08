import { Outlet } from "react-router-dom"
import { Container, HeaderContainer } from "./LoginLayout.styled"
import LoginHeaderSVG from "../../svg/login-header.svg"
import PLLogoSVG from "../../svg/white-pl-logo.svg"

const LoginLayout = () => {
  return (
    <Container>
      <Outlet />

      <HeaderContainer>
        <img src={LoginHeaderSVG} alt="Login header" />

        <img src={PLLogoSVG} alt="Premier league" />
      </HeaderContainer>
    </Container>
  )
}

export default LoginLayout
