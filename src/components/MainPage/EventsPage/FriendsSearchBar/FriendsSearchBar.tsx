import { useEffect, useState } from "react"
import useAxios from "axios-hooks"
import useDebounce from "../../../../utils/useDebounce"
import { getToken } from "../../../../utils/token"
import {
  Container,
  FollowButton,
  SearchResultContainer,
} from "./FriendsSearchBar.styled"
import { ReactComponent as SearchSVG } from "../../../../svg/search.svg"
import { ReactComponent as SampleProfileSVG } from "../../../../svg/sample-profile.svg"

const SearchResult = ({
  manager,
}: {
  manager: {
    managerId: string
    first_name: string
    last_name: string
    following: boolean
    img?: string
  }
}) => {
  const [{ data }, execute] = useAxios(
    {
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/connections/follow`,
      method: "post",
      headers: { token: getToken() },
    },
    { manual: true }
  )

  return (
    <SearchResultContainer>
      <div>
        <SampleProfileSVG />

        <span>{`${manager.first_name} ${manager.last_name}`}</span>
      </div>

      {manager.following ? null : (
        <div>
          <FollowButton>دنبال کردن</FollowButton>
        </div>
      )}
    </SearchResultContainer>
  )
}

const FriendsSearchBar = () => {
  const [searchField, setSearchField] = useState<string>("")

  const debounce = useDebounce(searchField, 400)

  const [{ data }, execute] = useAxios(
    {
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/connections/users/search`,
      method: "post",
      headers: { token: getToken() },
    },
    { manual: true }
  )

  useEffect(() => {
    if (debounce) {
      execute({ data: { fullName: debounce } })
    }
  }, [debounce])

  return (
    <Container>
      <SearchSVG />

      <input
        placeholder="اسم دوستات رو جستجو کن و دنبالشون کن"
        value={searchField}
        onChange={(e) => {
          setSearchField(e.target.value)
        }}
      />

      <div className="search-result">
        {data &&
          data.data.map((manager: any) => {
            return <SearchResult manager={manager} />
          })}
      </div>
    </Container>
  )
}

export default FriendsSearchBar
