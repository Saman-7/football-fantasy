import { NavItem, NavbarContainer } from "../styles/NavbarStyled";

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
          <a>{t}</a>
        </NavItem>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
