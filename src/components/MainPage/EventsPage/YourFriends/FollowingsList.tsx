import { FollowingsContainer, ViewProfileButton } from "./YourFriends.styled"
import { ReactComponent as SampleProfileSVG } from "../../../../svg/sample-profile.svg"

const FollowingsList = ({
  followings,
}: {
  followings:
    | {
        managerId: string
        first_name: string
        last_name: string
        following: boolean
        img?: string
      }[]
    | undefined
}) => {
  if (!followings) return <></>

  return (
    <>
      {followings.map((following) => (
        <FollowingsContainer key={following.managerId}>
          <div>
            <SampleProfileSVG className="profile-img" />

            <span>{`${following.first_name} ${following.last_name}`}</span>
          </div>

          <ViewProfileButton>مشاهده</ViewProfileButton>
        </FollowingsContainer>
      ))}
    </>
  )
}

export default FollowingsList
