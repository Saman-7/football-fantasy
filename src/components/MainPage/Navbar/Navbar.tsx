import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { NavbarItem, NavbarContainer, MenuNavbar } from "./Navbar.styled"
import { ReactComponent as MenuSVG } from "../../../svg/menu.svg"

const NavbarItemsTexts = [
  { text: "تیم من", path: "/main/my-team" },
  { text: "نقل و انتقالات", path: "/main/transfers" },
  { text: "آخرین رویداد‌ها", path: "/main/events" },
  { text: "پروفایل", path: "/main/profile" },
  { text: "جوایز", path: "/main/awards" },
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

  return (
    <>
      <MenuNavbar onClick={() => setIsMenu((isMenu) => !isMenu)}>
        <MenuSVG />
        <span>{valueMenu()}</span>
      </MenuNavbar>
      {isMenu && (
        <NavbarContainer>
          {NavbarItemsTexts.map(({ text, path }, index) => (
            <NavbarItem key={index} onClick={selectedItemMenu}>
              <NavLink to={path}>{text}</NavLink>
            </NavbarItem>
          ))}
        </NavbarContainer>
      )}
    </>
  )
}

export default Navbar
