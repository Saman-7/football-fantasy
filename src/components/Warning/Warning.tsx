import { ReactComponent as WarningSVG } from "../../svg/warning.svg"
import { PopupWarning, WarningContainer } from "./Warning.styled"

interface PropsWarning {
  text: string
  display: (text: string | undefined) => void
}

const Warning = ({ text, display }: PropsWarning) => {
  return (
    <WarningContainer>
      <PopupWarning>
        <div className="head-text">
          <span>خطا</span>
        </div>
        <WarningSVG className="warning-svg" />
        <span className="text">{text}</span>
        <button onClick={() => display(undefined)}>تایید</button>
      </PopupWarning>
    </WarningContainer>
  )
}

export default Warning
