import { useEffect, useState } from "react"
import {
  FilterContainer,
  Filter,
  YourFriendsBottomContainer,
  YourFriendsContainer,
  YourFriendsTopContainer,
  SearchBarContainer,
} from "./YourFriends.styled"
import { ReactComponent as SearchSVG } from "../../../../svg/search.svg"
import FollowersList from "./FollowersList"
import useAxios from "axios-hooks"
import { getToken } from "../../../../utils/token"
import FollowingsList from "./FollowingsList"

const YourFriends = () => {
  const [viewingFollowers, setViewingFollowers] = useState<boolean>(true)
  const [followers, setFollowers] = useState<
    {
      managerId: string
      first_name: string
      last_name: string
      following: boolean
      img?: string
    }[]
  >()
  const [followings, setFollowings] = useState<
    {
      managerId: string
      first_name: string
      last_name: string
      following: boolean
      img?: string
    }[]
  >()

  const [{ data: followersData }, getFollowersData] = useAxios(
    {
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/connections/followers`,
      method: "get",
      headers: { token: getToken() },
    },
    { manual: true }
  )

  const [{ data: followingData }, getFollowingData] = useAxios(
    {
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/connections/followings`,
      method: "get",
      headers: { token: getToken() },
    },
    { manual: true }
  )

  useEffect(() => {
    if (viewingFollowers) {
      setFollowings(undefined)
      getFollowersData()
    } else {
      setFollowers(undefined)
      getFollowingData()
    }
  }, [getFollowersData, getFollowingData, viewingFollowers])

  useEffect(() => {
    if (followersData) setFollowers(followersData.data)
  }, [followersData])

  useEffect(() => {
    if (followingData) setFollowings(followingData.data)
  }, [followingData])

  const handleFilterClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setViewingFollowers((prev) => !prev)
  }

  return (
    <YourFriendsContainer>
      <YourFriendsTopContainer>
        <span>دوستان شما</span>
      </YourFriendsTopContainer>

      <YourFriendsBottomContainer>
        <FilterContainer>
          <Filter
            selected={viewingFollowers}
            disabled={viewingFollowers}
            onClick={handleFilterClick}
          >
            دنبال کنندگان
          </Filter>

          <Filter
            selected={!viewingFollowers}
            disabled={!viewingFollowers}
            onClick={handleFilterClick}
          >
            دنبال شوندگان
          </Filter>
        </FilterContainer>

        <SearchBarContainer>
          <SearchSVG className="search-svg" />

          <input placeholder="جستجو" />
        </SearchBarContainer>

        {viewingFollowers ? (
          <FollowersList followers={followers} />
        ) : (
          <FollowingsList followings={followings} />
        )}
      </YourFriendsBottomContainer>
    </YourFriendsContainer>
  )
}

export default YourFriends
