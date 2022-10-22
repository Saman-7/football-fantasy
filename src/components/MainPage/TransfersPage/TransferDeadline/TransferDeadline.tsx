import { useEffect, useState } from "react"
import { getMatchWeekStatus } from "../../../../api/requests"
import useFetcher from "../../../../api/useFetcher"
import { numberEnglishToPersian } from "../../../../utils/numberEnglishToPersion"
import {
  TransferDeadlineContainer,
  TransferDeadlineLeftContainer,
  TransferDeadlineRightContainer,
} from "./TransferDeadline.styled"

const TransferDeadline = ({ width }: { width: number }) => {
  const [epoch, setEpoch] = useState<string>("")

  const { data } = useFetcher(() =>
    getMatchWeekStatus().then((res) => res.data.data)
  )

  const formatDate = (epoch: number) => {
    const arrDate = new Date((epoch - 24 * 60 * 60) * 1000)
      .echoFa()
      .replace("،", "")
      .split("-")
    const hour = `ساعت ${arrDate[1].split(":")[0]}`
    const textDate = `${arrDate[0]} - ${hour}`

    return numberEnglishToPersian(textDate)
  }

  useEffect(() => {
    if (!data) return

    setEpoch(data.deadline_time_epoch)
  }, [data])

  return (
    <TransferDeadlineContainer width={width}>
      <TransferDeadlineRightContainer>
        <span>مهلت تغییرات</span>
      </TransferDeadlineRightContainer>

      <TransferDeadlineLeftContainer>
        {epoch && <span>{formatDate(parseInt(epoch))}</span>}
      </TransferDeadlineLeftContainer>
    </TransferDeadlineContainer>
  )
}

export default TransferDeadline
