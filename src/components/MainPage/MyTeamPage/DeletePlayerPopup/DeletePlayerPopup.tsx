import uniform from "../../../../images/uniform.png"
import {
  ButtonPopup,
  DeletePlayerPopupContainer,
  PopupBox,
} from "./DeletePlayerPopup.styled"

interface TypeDeletePlayerPopup {
  playerId: number
  playerName: string
  deletePlayer: (status: boolean) => void
}

const DeletePlayerPopup = (props: TypeDeletePlayerPopup) => {
  return (
    <DeletePlayerPopupContainer>
      <PopupBox>
        <div className="head-text">
          <span>حذف بازیکن</span>
        </div>
        <img className="uniform-img" src={uniform} alt="uniform" />
        <span className="question">{` آیا از حذف ${props.playerName} مطمئن هستید؟`}</span>
        <ButtonPopup>
          <button className="delete" onClick={() => props.deletePlayer(true)}>
            حذف
          </button>
          <button onClick={() => props.deletePlayer(false)}>لغو</button>
        </ButtonPopup>
      </PopupBox>
    </DeletePlayerPopupContainer>
  )
}

export default DeletePlayerPopup
