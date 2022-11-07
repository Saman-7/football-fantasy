import {
  FollowersContainer,
  FollowProfileButton,
  ViewProfileButton,
} from "./YourFriends.styled"
import { ReactComponent as SampleProfileSVG } from "../../../../svg/sample-profile.svg"

const FollowersList = ({
  followers,
}: {
  followers:
    | {
        managerId: string
        first_name: string
        last_name: string
        following: boolean
        img?: string
      }[]
    | undefined
}) => {
  if (!followers) return <></>

  return (
    <>
      {followers.map((follower) => (
        <FollowersContainer key={follower.managerId}>
          <div>
            <SampleProfileSVG className="profile-img" />

            <span>{`${follower.first_name} ${follower.last_name}`}</span>
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
      ))}
    </>
  )
}

export default FollowersList
