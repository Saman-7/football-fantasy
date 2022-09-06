import {
  ConfirmationFormContainer,
  InputContainer,
} from "./Confirmation.styled"
import {
  Container,
  HeaderContainer,
  FormHeaderContainer,
  Input,
} from "../Signin/Signin.styled"
import { FormContainer, Button } from "../Signup/Signup.styled"
import PurpleLineSVG from "../../svg/purple-line.svg"
import PinkLineSVG from "../../svg/pink-line.svg"
import LoginHeaderSVG from "../../svg/login-header.svg"
import PLLogoSVG from "../../svg/white-pl-logo.svg"
import { useState } from "react"

const Confirmation = () => {
  const [code, setCode] = useState("")

  return (
    <Container>
      <ConfirmationFormContainer>
        <FormHeaderContainer>
          <img src={PurpleLineSVG} alt="Purple line" />

          <span>تایید ثبت نام</span>

          <img src={PinkLineSVG} alt="Pink line" />
        </FormHeaderContainer>

        <FormContainer>
          <form>
            <InputContainer>
              <span>
                لطفا کدی که به ایمیلتان ارسال شده را در کادر زیر وارد کنید
              </span>
              <Input
                id="code"
                name="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </InputContainer>

            <Button value={"تایید ثبت نام"} />
          </form>
        </FormContainer>
      </ConfirmationFormContainer>

      <HeaderContainer>
        <img src={LoginHeaderSVG} alt="Login header" />

        <img src={PLLogoSVG} alt="Premier league" />
      </HeaderContainer>
    </Container>
  )
}

export default Confirmation
