import uniform from "../../images/uniform.png";
import {
  ButtonPopup,
  DeletePlayerPopupContainer,
  PopupBox,
} from "./DeletePlayerPopup.styled";

const DeletePlayerPopup = () => {
  return (
    <DeletePlayerPopupContainer>
      <PopupBox>
        <div className="head-text">
          <span>حذف بازیکن</span>
        </div>
        <img className="uniform-img" src={uniform} alt="uniform" />
        <span className="question">آیا از حذف Henderson مطمئن هستید؟</span>
        <ButtonPopup>
          <button className="delete">حذف</button>
          <button>لغو</button>
        </ButtonPopup>
      </PopupBox>
    </DeletePlayerPopupContainer>
  );
};

export default DeletePlayerPopup;
