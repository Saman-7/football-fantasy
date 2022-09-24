import { useEffect, useState } from "react"
import { axios } from "../../../../api/axiosInstance"
import {
  MatchweekDateContainer,
  MatchweekNumberContainer,
  MatchweekStatusContainer,
} from "./MatchweekStatus.styled"
import "jdate.js"
import { weekToStringPersian } from "../../../../utils/weekToStringPersion"
import { numberEnglishToPersian } from "../../../../utils/numberEnglishToPersion"
import useFetcher from "../../../../api/useFetcher"

interface TypePropsMatchWeekStatus {
  width: number
}

const MatchweekStatus = (props: TypePropsMatchWeekStatus) => {
  const [week, setWeek] = useState<string>()
  const [date, setDate] = useState<string>()

  const handleWeekStatus = (week: string) => {
    const numberWeek = Number(week.split(" ")?.[1])
    const textWeek = `هفته ${weekToStringPersian(numberWeek)}`
    setWeek(textWeek)
  }

  const handleDateEpoch = (epoch: number) => {
    const arrDate = new Date(epoch * 1000).echoFa().replace("،", "").split("-")
    const hour = `ساعت ${arrDate[1].split(":")[0]}`
    const textDate = `${arrDate[0]} - ${hour}`
    setDate(numberEnglishToPersian(textDate))
  }

  const { data } = useFetcher(() =>
    axios.get("/api/v1/events/current/info").then((res) => res.data.data)
  )

  useEffect(() => {
    if (!data) return

    handleWeekStatus(data.name)
    handleDateEpoch(parseInt(data.deadline_time_epoch))
  }, [data])

  return (
    <MatchweekStatusContainer width={props.width}>
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
