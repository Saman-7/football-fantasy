import { ReactComponent as RahnemaLogoSVG } from "../../svg/rahnema-logo.svg";
import { ViewSwitcherContainer } from "./ViewSwicher.styled";

const ViewSwitcher = () => {
  return (
    <ViewSwitcherContainer>
      <RahnemaLogoSVG className="rahnema-logo" />
      <div className="button-switch">
        <button>شماتیک ترکیب</button>
        <button>مشاهده لیست</button>
      </div>
    </ViewSwitcherContainer>
  );
};

export default ViewSwitcher;
