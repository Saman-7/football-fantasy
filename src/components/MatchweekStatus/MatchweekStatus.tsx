import { useEffect, useState } from "react"
import axios from "axios"
import {
  MatchweekDateContainer,
  MatchweekNumberContainer,
  MatchweekStatusContainer,
} from "./MatchweekStatus.styled"
import "jdate.js"
import { weekToStringPersian } from "../../utils/weekToStringPersion"
import { numberEnglishToPersian } from "../../utils/numberEnglishToPersion"

const MatchweekStatus = () => {
  const [week, setWeek] = useState<string>()
  const [date, setDate] = useState<string>()

  const handleWeekStatus = (week: string) => {
    const numberWeek = Number(week.split(" ")?.[1])
    const textWeek = `هفته ${weekToStringPersian(numberWeek)}`
    setWeek(textWeek)
  }

  const handleDateEpoch = (epoch: number) => {
    const arrDate = new Date(epoch * 1000).echoFa().replace("،", "").split("-")
    console.log("arr", arrDate)
    const hour = `ساعت ${arrDate[1].split(":")[0]}`
    const textDate = `${arrDate[0]} - ${hour}`
    setDate(numberEnglishToPersian(textDate))
  }

  useEffect(() => {
    axios
      .get("http://178.216.248.37:8080/api/v1/events/current/info")
      .then((res) => {
        const { name, deadline_time_epoch } = res.data.data
        handleWeekStatus(name)
        handleDateEpoch(parseInt(deadline_time_epoch))
      })
  }, [])

  return (
    <MatchweekStatusContainer>
      <MatchweekNumberContainer>
        <span>{week}</span>
      </MatchweekNumberContainer>

      <MatchweekDateContainer>
        <span>{date}</span>
      </MatchweekDateContainer>
    </MatchweekStatusContainer>
  )
}

export default MatchweekStatus
