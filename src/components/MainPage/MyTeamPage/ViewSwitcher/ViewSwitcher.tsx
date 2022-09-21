import { useState } from "react"
import { ReactComponent as RahnemaLogoSVG } from "../../../../svg/rahnema-logo.svg"
import { ViewSwitcherContainer } from "./ViewSwicher.styled"
import classNames from "classnames"

interface PropsViewSwitcher {
  setPitch: () => void
  setList: () => void
}

enum TYPE_PAGE {
  pitch,
  list,
}

const ViewSwitcher = (props: PropsViewSwitcher) => {
  const [typePage, setTypePage] = useState(TYPE_PAGE.pitch)

  const pitchPage = () => {
    props.setPitch()
    setTypePage(TYPE_PAGE.pitch)
  }
  const listPage = () => {
    props.setList()
    setTypePage(TYPE_PAGE.list)
  }

  return (
    <ViewSwitcherContainer>
      <RahnemaLogoSVG className="rahnema-logo" />
      <div className="button-switch">
        <button
          className={classNames({ active: typePage === TYPE_PAGE.pitch })}
          onClick={pitchPage}
        >
          شماتیک ترکیب
        </button>
        <button
          className={classNames({ active: typePage === TYPE_PAGE.list })}
          onClick={listPage}
        >
          مشاهده لیست
        </button>
      </div>
    </ViewSwitcherContainer>
  )
}

export default ViewSwitcher
