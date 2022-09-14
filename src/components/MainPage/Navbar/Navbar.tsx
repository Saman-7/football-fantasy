import { NavbarItem, NavbarContainer } from "./Navbar.styled"

const NavbarItemsTexts = [
  "تیم من",
  "نقل و انتقالات",
  "آخرین رویداد‌ها",
  "پروفایل",
  "جوایز",
]

const Navbar = () => {
  return (
    <NavbarContainer>
      {NavbarItemsTexts.map((text) => (
        <NavbarItem>
          <a href="/#">{text}</a>
        </NavbarItem>
      ))}
    </NavbarContainer>
  )
}

export default Navbar
