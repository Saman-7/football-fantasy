import {
  MatchweekDateContainer,
  MatchweekNumberContainer,
  MatchweekStatusContainer,
} from "./MatchweekStatus.styled";

const MatchweekStatus = () => {
  return (
    <MatchweekStatusContainer>
      <MatchweekNumberContainer>
        <span>هفته سوم</span>
      </MatchweekNumberContainer>

      <MatchweekDateContainer>
        <span>شنبه ۳۰ مرداد ۱۴۰۰ - ساعت ۱۷</span>
      </MatchweekDateContainer>
    </MatchweekStatusContainer>
  );
};

export default MatchweekStatus;
