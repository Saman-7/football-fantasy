import { NavLink } from "react-router-dom"
import { NavbarItem, NavbarContainer } from "./Navbar.styled"

const NavbarItemsTexts = [
  { text: "تیم من", path: "/main/my-team" },
  { text: "نقل و انتقالات", path: "/main/transfers" },
  { text: "آخرین رویداد‌ها", path: "/main/events" },
  { text: "پروفایل", path: "/main/profile" },
  { text: "جوایز", path: "/main/awards" },
]

const Navbar = () => {
  return (
    <NavbarContainer>
      {NavbarItemsTexts.map(({ text, path }, index) => (
        <NavbarItem key={index}>
          <NavLink to={path}>{text}</NavLink>
        </NavbarItem>
      ))}
    </NavbarContainer>
  )
}

export default Navbar
