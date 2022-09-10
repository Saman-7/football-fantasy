import { PAGE_VIEW_SWITCHER } from "../../pages/MainPage"
import { ReactComponent as RahnemaLogoSVG } from "../../svg/rahnema-logo.svg"
import { ViewSwitcherContainer } from "./ViewSwicher.styled"
import classNames from "classnames"

interface PropsViewSwitcher {
  typePage: PAGE_VIEW_SWITCHER
  changePage: React.Dispatch<React.SetStateAction<PAGE_VIEW_SWITCHER>>
}

const ViewSwitcher = (props: PropsViewSwitcher) => {
  return (
    <ViewSwitcherContainer>
      <RahnemaLogoSVG className="rahnema-logo" />
      <div className="button-switch">
        <button
          className={classNames({
            active: props.typePage === PAGE_VIEW_SWITCHER.pitch,
          })}
          onClick={() => props.changePage(PAGE_VIEW_SWITCHER.pitch)}
        >
          شماتیک ترکیب
        </button>
        <button
          className={classNames({
            active: props.typePage === PAGE_VIEW_SWITCHER.list,
          })}
          onClick={() => props.changePage(PAGE_VIEW_SWITCHER.list)}
        >
          مشاهده لیست
        </button>
      </div>
    </ViewSwitcherContainer>
  )
}

export default ViewSwitcher
