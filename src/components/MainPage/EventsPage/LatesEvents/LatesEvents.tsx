import profile1 from "../../../../images/profile1.png"
import { ReactComponent as HeartLikeSVG } from "../../../../svg/heart-like.svg"
import { ReactComponent as StarSVG } from "../../../../svg/star.svg"
import { ReactComponent as ArrowUpGreenSVG } from "../../../../svg/arrow-up-green.svg"
import { ReactComponent as ArrowDownRedSVG } from "../../../../svg/arrow-down-red.svg"
import {
  BoxEventContent,
  ChangesPlayerContent,
  HeadBoxEvent,
  ItemEvent,
  LatesEventsContainer,
  MainBoxEvent,
  MatchWeek,
  PictureEvent,
} from "./LatesEvents.styled"
import { axios } from "../../../../api/axiosInstance"
import { useEffect, useState } from "react"
import { numberEnglishToPersian } from "../../../../utils/numberEnglishToPersion"
import classNames from "classnames"
import { updateToDislike, updateToLike } from "../../../../api/requests"

const LatesEvents = () => {
  const [events, setEvents] = useState<Array<any>>([])
  const [isLike, setIsLike] = useState(false)

  useEffect(() => {
    axios.get("/api/v1/feeds").then((res) => {
      setEvents(res.data.data)
    })
  }, [isLike])

  const handleLike = (feedId: string, is_liked: boolean) => {
    if (is_liked) {
      updateToDislike(feedId).then((_) => {
        setIsLike(false)
      })
    } else {
      updateToLike(feedId).then((_) => {
        setIsLike(true)
      })
    }
  }

  return (
    <LatesEventsContainer>
      <div className="title">
        <h1>آخرین رویدادها</h1>
      </div>

      {events.map((user) => (
        <BoxEventContent key={user.managerId}>
          <PictureEvent>
            <img src={profile1} alt="profile-1" />
            <span>{`${user.first_name} ${user.last_name}`}</span>
            <HeartLikeSVG
              className={classNames("heart-like-svg", {
                isLike: user.is_liked,
              })}
              onClick={() => handleLike(user.feedId, user.is_liked)}
            />
          </PictureEvent>

          <MainBoxEvent>
            <HeadBoxEvent>
              <span>امتیاز هفته</span>
              <div className="rating">
                <StarSVG className="star-svg" />
                <span>{numberEnglishToPersian(user.points.toString())}</span>
              </div>
            </HeadBoxEvent>

            <ChangesPlayerContent>
              <span>تعویض‌ها</span>

              <div className="items-content">
                <div className="item">
                  {user.substitutions.map((data: any, index: number) => (
                    <ItemEvent key={index}>
                      <ArrowUpGreenSVG className="arrow-svg" />
                      <span>{data.in}</span>
                    </ItemEvent>
                  ))}
                </div>
                <div className="item">
                  {user.substitutions.map((data: any, index: number) => (
                    <ItemEvent key={index}>
                      <ArrowDownRedSVG className="arrow-svg" />
                      <span>{data.out}</span>
                    </ItemEvent>
                  ))}
                </div>
              </div>
            </ChangesPlayerContent>
            <MatchWeek>
              <span>#هفته‌ـ‌پنجم</span>
            </MatchWeek>
          </MainBoxEvent>
        </BoxEventContent>
      ))}
    </LatesEventsContainer>
  )
}

export default LatesEvents
