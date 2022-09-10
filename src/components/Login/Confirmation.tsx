import axios from "axios"
import { useNavigate } from "react-router-dom"
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

  const navigate = useNavigate()

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

          <Button
            value={"تایید ثبت نام"}
            onClick={async (e) => {
              e.preventDefault()

              const response = await axios.post(
                "http://178.216.248.37:8080/api/v1/auth/verify",
                { email, code }
              )

              const { token } = response.data.data

              localStorage.setItem("token", token)

              navigate("/main-page")
            }}
          />
        </form>
      </FormContainer>
    </ConfirmationFormContainer>
  )
}

export default Confirmation
