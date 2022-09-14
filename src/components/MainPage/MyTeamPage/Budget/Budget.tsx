import { BudgetContainer, BudgetRightContainer } from "./Budget.styled"
import WalletSVG from "../../../../svg/wallet.svg"
import useMainPageStore from "../../../../store"

const Budget = () => {
  const { budget } = useMainPageStore()

  return (
    <BudgetContainer>
      <BudgetRightContainer>
        <img src={WalletSVG} alt="Wallet" />

        <span>باقی مانده پول</span>
      </BudgetRightContainer>

      <span>{budget}</span>
    </BudgetContainer>
  )
}

export default Budget
