import { useState } from "react"
import {
  FilterContainer,
  Filter,
  YourFriendsBottomContainer,
  YourFriendsContainer,
  YourFriendsTopContainer,
  SearchBarContainer,
  FollowersContainer,
  ViewProfileButton,
  FollowProfileButton,
  FollowingsContainer,
} from "./YourFriends.styled"
import { ReactComponent as SearchSVG } from "../../svg/search.svg"
import { ReactComponent as SampleProfileSVG } from "../../svg/sample-profile.svg"

const followers = [
  {
    managerId: "ndkzmlkcdnfkhgbkjvfnjklnvnfjcbfhb",
    fname: "سهراب",
    lname: "چگینی",
    following: true,
  },
  {
    managerId: "9renjgvfnjbgknhjnecss",
    fname: "سامان",
    lname: "عبیری",
    following: false,
  },
  {
    managerId: "ks8wnfknjkbgnjknkjbnjk91029839",
    fname: "پارسا",
    lname: "پورسیستانی",
    following: true,
  },
  {
    managerId: "0293kmklfgmtlkfnjbgknlmxm",
    fname: "پوریا",
    lname: "ملک خیاط",
    following: true,
  },
  {
    managerId: "9874920934854938457yhfvbgjbhvnf",
    fname: "سارا",
    lname: "زاهدی",
    following: false,
  },
]

const YourFriends = () => {
  const [viewingFollowers, setViewingFollowers] = useState<boolean>(true)

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
          <SearchSVG />

          <input placeholder="جستجو" />
        </SearchBarContainer>

        {viewingFollowers ? (
          followers.map((follower) => {
            return (
              <FollowersContainer key={follower.managerId}>
                <div>
                  <SampleProfileSVG />

                  <span>{`${follower.fname} ${follower.lname}`}</span>
                </div>

                {follower.following ? (
                  <ViewProfileButton>مشاهده</ViewProfileButton>
                ) : (
                  <FollowProfileButton
                    onClick={(e) => {
                      e.preventDefault()
                    }}
                  >
                    دنبال کردن
                  </FollowProfileButton>
                )}
              </FollowersContainer>
            )
          })
        ) : (
          <FollowingsContainer></FollowingsContainer>
        )}
      </YourFriendsBottomContainer>
    </YourFriendsContainer>
  )
}

export default YourFriends
