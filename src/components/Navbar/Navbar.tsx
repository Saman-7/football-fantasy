import { NavItem, NavbarContainer } from "./NavbarStyled";

const itemsText = [
  "تیم من",
  "نقل و انتقالات",
  "آخرین رویداد‌ها",
  "پروفایل",
  "جوایز",
];

const Navbar = () => {
  return (
    <NavbarContainer>
      {itemsText.map((t) => (
        <NavItem>
          <a href="/#">{t}</a>
        </NavItem>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
