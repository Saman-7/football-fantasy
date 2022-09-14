import { Container } from "./FriendsSearchBar.styled"
import { ReactComponent as SearchSVG } from "../../../svg/search.svg"

const FriendsSearchBar = () => {
  return (
    <Container>
      <SearchSVG />

      <input placeholder="اسم دوستات رو جستجو کن و دنبالشون کن" />
    </Container>
  )
}

export default FriendsSearchBar
