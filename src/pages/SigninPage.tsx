import { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import useAxios from "axios-hooks"
import { useNavigate } from "react-router-dom"
import { checkToken, getToken, setToken } from "../utils/token"
import {
  ButtonGroup,
  FormContainer,
  FormHeaderContainer,
  Input,
  InputContainer,
  SigninButton,
  SigninFormContainer,
  SignupButton,
  ValidationError,
} from "../components/Login/Signin/Signin.styled"
import PurpleLineSVG from "../svg/purple-line.svg"
import PinkLineSVG from "../svg/pink-line.svg"
import axios from "axios"

const SigninPage = () => {
  const [tokenIsSet, setTokenIsSet] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISigninInput>()

  const [{ data, error }, execute] = useAxios(
    {
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/auth/login`,
      method: "post",
    },
    { manual: true }
  )

  const navigate = useNavigate()

  // Effect to check if there is a token already set
  useEffect(() => {
    const token = getToken()

    checkToken(token) && setTokenIsSet(true)
  }, [])

  // Effect to redirect to main page if token is already set
  useEffect(() => {
    tokenIsSet && navigate("/main/my-team")
  }, [tokenIsSet])

  // Effect to set token
  useEffect(() => {
    if (data) {
      const { token } = data.data

      if (token) {
        setToken(token)
        setTokenIsSet(true)
      }
    }
  }, [data])

  // Effect to display login errors
  useEffect(() => {
    error && alert(error.code)
  }, [error])

  const onSubmit: SubmitHandler<ISigninInput> = (formData) => {
    execute({ data: { ...formData } })
  }

  return (
    <SigninFormContainer>
      <FormHeaderContainer>
        <img src={PurpleLineSVG} alt="Purple line" />

        <span>ورود به فانتزی</span>

        <img src={PinkLineSVG} alt="Pink line" />
      </FormHeaderContainer>

      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="username">نام کاربری</label>

            <Input
              id="username"
              {...register("username", {
                required: "نام کاربری حتما وارد شود",
              })}
            />

            <ValidationError>
              {errors && errors.username?.message}
            </ValidationError>
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">رمزعبور</label>

            <Input
              id="password"
              type="password"
              {...register("password", { required: "رمز عبور حتما وارد شود" })}
            />

            <ValidationError>
              {errors && errors.password?.message}
            </ValidationError>
          </InputContainer>

          <ButtonGroup>
            <SigninButton value="ورود" />

            <SignupButton
              value="ثبت نام"
              onClick={(e) => {
                e.preventDefault()

                navigate("/signup")
              }}
            />
          </ButtonGroup>
        </form>
      </FormContainer>
    </SigninFormContainer>
  )
}

export default SigninPage
