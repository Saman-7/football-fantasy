import styled from "styled-components";
import { ReactComponent as RahnemaLogo } from "../../svg/rahnema-logo.svg";

const ViewSwitcherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  & .rahnema-logo {
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  & .change button {
    height: 30px;
    width: 131px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: #3d195b;
    background-color: white;
    border: none;
  }
`;

const ViewSwitcher = () => {
  return (
    <ViewSwitcherContainer>
      <RahnemaLogo className="rahnema-logo" />
      <div className="change">
        <button>شماتیک ترکیب</button>
        <button>مشاهده لیست</button>
      </div>
    </ViewSwitcherContainer>
  );
};

export default ViewSwitcher;
