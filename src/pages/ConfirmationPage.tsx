import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import useAxios from "axios-hooks"
import { checkToken, getToken, setToken } from "../utils/token"
import {
  ConfirmationFormContainer,
  InputContainer,
  ValidationError,
} from "../components/Login/Confirmation/Confirmation.styled"
import {
  FormHeaderContainer,
  Input,
} from "../components/Login/Signin/Signin.styled"
import { FormContainer, Button } from "../components/Login/Signup/Signup.styled"
import PurpleLineSVG from "../svg/purple-line.svg"
import PinkLineSVG from "../svg/pink-line.svg"

const ConfirmationPage = () => {
  const location = useLocation()
  const [confEmail, setConfEmail] = useState<string>("")
  const [tokenIsSet, setTokenIsSet] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IConfirmationInput>()

  const [{ data, response }, execute] = useAxios(
    {
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/auth/verify`,
      method: "POST",
    },
    { manual: true }
  )

  useEffect(() => {
    if (location.state) {
      const { email } = location.state as { email: string }

      setConfEmail(email)
    }
  }, [location])

  const navigate = useNavigate()

  useEffect(() => {
    if (data) {
      const { token } = data.result

      if (token) {
        setToken(token)
        setTokenIsSet(true)
      }
    }
  }, [data])

  useEffect(() => {
    tokenIsSet && navigate("/main/my-team")
  }, [tokenIsSet])

  const onSubmit: SubmitHandler<IConfirmationInput> = (formData) => {
    execute({ data: { ...formData, email: confEmail } })
  }

  return (
    <ConfirmationFormContainer>
      <FormHeaderContainer>
        <img src={PurpleLineSVG} alt="Purple line" />

        <span>تایید ثبت نام</span>

        <img src={PinkLineSVG} alt="Pink line" />
      </FormHeaderContainer>

      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <span>
              لطفا کدی که به ایمیلتان ارسال شده را در کادر زیر وارد کنید
            </span>
            <Input
              id="code"
              {...register("code", { required: "حتما کد تایید را وارد کنید" })}
            />

            <ValidationError>{errors && errors.code?.message}</ValidationError>
          </InputContainer>

          <Button value={"تایید ثبت نام"} />
        </form>
      </FormContainer>
    </ConfirmationFormContainer>
  )
}

export default ConfirmationPage
