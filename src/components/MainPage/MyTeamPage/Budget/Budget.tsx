import { BudgetContainer, BudgetRightContainer } from "./Budget.styled"
import WalletSVG from "../../../../svg/wallet.svg"
import useMainPageStore from "../../../../store"
import { numberEnglishToPersian } from "../../../../utils/numberEnglishToPersion"

const Budget = () => {
  const { budget } = useMainPageStore()

  return (
    <BudgetContainer>
      <BudgetRightContainer>
        <img src={WalletSVG} alt="Wallet" />

        <span>باقی مانده پول</span>
      </BudgetRightContainer>

      <span>{numberEnglishToPersian(budget.toString())}</span>
    </BudgetContainer>
  )
}

export default Budget
