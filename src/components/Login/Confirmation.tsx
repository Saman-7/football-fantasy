import {
  ConfirmationFormContainer,
  InputContainer,
} from "./Confirmation.styled"
import { FormHeaderContainer, Input } from "./Signin.styled"
import { FormContainer, Button } from "../Signup/Signup.styled"
import PurpleLineSVG from "../../svg/purple-line.svg"
import PinkLineSVG from "../../svg/pink-line.svg"

interface ConfirmationProps {
  code: string
  email: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Confirmation = (props: ConfirmationProps) => {
  const { code, email } = props

  const { handleChange } = props

  return (
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
            <Input id="code" name="code" value={code} onChange={handleChange} />
          </InputContainer>

          <Button value={"تایید ثبت نام"} />
        </form>
      </FormContainer>
    </ConfirmationFormContainer>
  )
}

export default Confirmation
