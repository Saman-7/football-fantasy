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

const enterData = ["Yasin", "Varane", "Fernandes"]
const exitData = ["Haland", "Laporte", "Debruyne"]

const LatesEvents = () => {
  return (
    <LatesEventsContainer>
      <div className="title">
        <h1>آخرین رویدادها</h1>
      </div>

      <BoxEventContent>
        <PictureEvent>
          <img src={profile1} alt="profile-1" />
          <span>شایان رضایی</span>
          <HeartLikeSVG className="heart-like-svg" />
        </PictureEvent>

        <MainBoxEvent>
          <HeadBoxEvent>
            <span>امتیاز هفته</span>
            <div className="rating">
              <StarSVG className="star-svg" />
              <span>۱۰۴</span>
            </div>
          </HeadBoxEvent>

          <ChangesPlayerContent>
            <span>تعویض‌ها</span>

            <div className="items-content">
              <div className="item">
                {enterData.map((name) => (
                  <ItemEvent>
                    <ArrowUpGreenSVG className="arrow-svg" />
                    <span>{name}</span>
                  </ItemEvent>
                ))}
              </div>
              <div className="item">
                {exitData.map((name) => (
                  <ItemEvent>
                    <ArrowDownRedSVG className="arrow-svg" />
                    <span>{name}</span>
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
    </LatesEventsContainer>
  )
}

export default LatesEvents
