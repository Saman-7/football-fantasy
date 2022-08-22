import styled from "styled-components";
import Logo from "../../svg/empty-wallet.svg";

const BudgetContainer = styled.div`
  width: 274px;
  height: 122px;
  background: linear-gradient(266.07deg, #04f4f0 2.18%, #02fda2 125.43%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 16px 16px 0px 0px;
  display: flex;
  justify-content: space-between;
`;

const BudgetAmmountContainer = styled.div`
  position: relative;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BudgetAmmount = styled.span`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  color: #3d195b;
`;

const BudgetLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  right: 18px;
`;

const BudgetLogoContainerText = styled.span`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  color: #3d195b;
`;

const WalletLogo = styled.img`
  width: 48px;
  height: 48px;
`;

const Budget = () => {
  return (
    <BudgetContainer>
      <BudgetAmmountContainer>
        <BudgetAmmount>۷۳</BudgetAmmount>
      </BudgetAmmountContainer>

      <BudgetLogoContainer>
        <WalletLogo src={Logo} />

        <BudgetLogoContainerText>باقی مانده پول</BudgetLogoContainerText>
      </BudgetLogoContainer>
    </BudgetContainer>
  );
};

export default Budget;
