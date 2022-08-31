import { HeaderContainer, HeaderRightContainer, PLLogo } from "./Header.style"
import ThreePlayersSVG from "../../svg/three-players.svg"
import PLLogoSVG from "../../svg/pl-logo.svg"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderRightContainer>
        <PLLogo src={PLLogoSVG} alt="Premier league" />

        <span>فوتبال فانتزی</span>
      </HeaderRightContainer>

      <img src={ThreePlayersSVG} alt="Three players" />
    </HeaderContainer>
  )
}

export default Header
