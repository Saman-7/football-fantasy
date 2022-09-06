import { useEffect, useState } from "react";
import axios from "axios";
import {
  MatchweekDateContainer,
  MatchweekNumberContainer,
  MatchweekStatusContainer,
} from "./MatchweekStatus.styled";
import "jdate.js";
import { weekToStringPersian } from "../../utils/weekToStringPersion";
import { numberEnglishToPersian } from "../../utils/numberEnglishToPersion";

const MatchweekStatus = () => {
  const [week, setWeek] = useState<string>();
  const [date, setDate] = useState<string>();

  const handleWeekStatus = (week: string) => {
    const numberWeek = Number(week.split(" ")?.[1]);
    const textWeek = `هفته ${weekToStringPersian(numberWeek)}`;
    setWeek(textWeek);
  };

  const handleDateEpoch = (epoch: number) => {
    const arrDate = new Date(epoch).echoFa().replace("،", "").split("-");
    const hour = `ساعت ${arrDate[1].split(":")[0]}`;
    const textDate = `${arrDate[0]} - ${hour}`;
    setDate(numberEnglishToPersian(textDate));
  };

  useEffect(() => {
    axios.get("/week").then((res) => {
      console.log(res.data);
      const { week, date } = res.data;
      handleWeekStatus(week);
      handleDateEpoch(date);
    });
  }, []);

  return (
    <MatchweekStatusContainer>
      <MatchweekNumberContainer>
        <span>{week}</span>
      </MatchweekNumberContainer>

      <MatchweekDateContainer>
        <span>{date}</span>
      </MatchweekDateContainer>
    </MatchweekStatusContainer>
  );
};

export default MatchweekStatus;
