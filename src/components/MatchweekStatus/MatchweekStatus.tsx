import {
  MatchweekDateContainer,
  MatchweekNumberContainer,
  MatchweekStatusContainer,
} from "./MatchweekStatus.styled"

interface MatchweekStatusProps {
  number: string
  date: string
}

const MatchweekStatus = (props: MatchweekStatusProps) => {
  return (
    <MatchweekStatusContainer>
      <MatchweekNumberContainer>
        <span>هفته سوم</span>
      </MatchweekNumberContainer>

      <MatchweekDateContainer>
        <span>شنبه ۳۰ مرداد ۱۴۰۰ - ساعت ۱۷</span>
      </MatchweekDateContainer>
    </MatchweekStatusContainer>
  )
}

export default MatchweekStatus
