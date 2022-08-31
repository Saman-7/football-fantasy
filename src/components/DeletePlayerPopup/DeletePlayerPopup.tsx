import uniformPNG from "../../images/uniform.png";
import {
  ButtonPopup,
  DeletePlayerPopupContainer,
  PopupBox,
} from "./DeletePlayerPopupStyled";

const DeletePlayerPopup = () => {
  return (
    <DeletePlayerPopupContainer>
      <PopupBox>
        <div className="head-text">
          <span>حذف بازیکن</span>
        </div>
        <img className="uniform-img" src={uniformPNG} alt="uniform" />
        <span className="question">آیا از حذف Henderson مطمين هستید؟</span>
        <ButtonPopup>
          <button>لغو</button>
          <button className="delete">حذف</button>
        </ButtonPopup>
      </PopupBox>
    </DeletePlayerPopupContainer>
  );
};

export default DeletePlayerPopup;
