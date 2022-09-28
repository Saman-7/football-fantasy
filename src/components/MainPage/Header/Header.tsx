import { HeaderContainer, HeaderRightContainer, PLLogo } from "./Header.style"
import ThreePlayersSVG from "../../../svg/three-players.svg"
import PLLogoSVG from "../../../svg/pl-logo.svg"
import HeaderBackground from "../../../svg/header-background.svg"

const Header = () => {
  return (
    <HeaderContainer>
      <img
        src={HeaderBackground}
        className="header-background"
        alt="Header background"
      />

      <HeaderRightContainer>
        <PLLogo src={PLLogoSVG} alt="Premier league" />
        <span>فوتبال فانتزی</span>
      </HeaderRightContainer>

      <img
        src={ThreePlayersSVG}
        className="three-players"
        alt="Three players"
      />
    </HeaderContainer>
  )
}

export default Header
