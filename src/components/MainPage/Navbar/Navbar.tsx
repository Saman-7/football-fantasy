import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { NavbarItem, NavbarContainer, MenuNavbar } from "./Navbar.styled"
import { ReactComponent as MenuSVG } from "../../../svg/menu.svg"
import useMediaQuery from "../../../utils/useMediaQuery"

const NavbarItemsTexts = [
  { text: "تیم من", path: "/main/my-team" },
  { text: "نقل و انتقالات", path: "/main/transfers" },
  { text: "آخرین رویداد‌ها", path: "/main/events" },
  { text: "پروفایل", path: "/main/profile" },
  { text: "جوایز", path: "/main/awards" },
  { text: "خروج", path: "/signin" },
]

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false)

  const { pathname } = useLocation()
  const valueMenu = () => {
    return NavbarItemsTexts.find((link) => link.path === pathname)?.text
  }

  const selectedItemMenu = () => {
    if (isMenu) {
      setIsMenu(false)
    }
  }

  const mobileMedia = useMediaQuery("(max-width:480px)")

  return (
    <>
      {mobileMedia && (
        <MenuNavbar onClick={() => setIsMenu((isMenu) => !isMenu)}>
          <MenuSVG />
          <span>{valueMenu()}</span>
        </MenuNavbar>
      )}
      {(!mobileMedia || isMenu) && (
        <NavbarContainer>
          {NavbarItemsTexts.map(({ text, path }, index) =>
            text === "خروج" ? (
              <NavbarItem
                key={index}
                onClick={(e) => {
                  e.preventDefault()
                  localStorage.removeItem("token")
                }}
              >
                <NavLink to={path}>{text}</NavLink>
              </NavbarItem>
            ) : (
              <NavbarItem key={index} onClick={selectedItemMenu}>
                <NavLink to={path}>{text}</NavLink>
              </NavbarItem>
            )
          )}
        </NavbarContainer>
      )}
    </>
  )
}

export default Navbar
