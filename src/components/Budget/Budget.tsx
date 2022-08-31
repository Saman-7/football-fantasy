import { BudgetContainer, BudgetRightContainer } from "./Budget.styled"
import WalletSVG from "../../svg/wallet.svg"

const Budget = () => {
  return (
    <BudgetContainer>
      <BudgetRightContainer>
        <img src={WalletSVG} alt="Wallet" />

        <span>باقی مانده پول</span>
      </BudgetRightContainer>

      <span>۷۳</span>
    </BudgetContainer>
  )
}

export default Budget
