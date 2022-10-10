import { useState, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import useAxios from "axios-hooks"
import { useNavigate } from "react-router-dom"
import { checkToken, getToken } from "../utils/token"
import {
  SignupFormContainer,
  FormContainer,
  InputRow,
  Input,
  CountryOption,
  CountrySelect,
  Button,
  ValidationError,
} from "./../components/Login/Signup/Signup.styled"
import {
  FormHeaderContainer,
  InputContainer,
} from "./../components/Login/Signin/Signin.styled"
import PurpleLineSVG from "../svg/purple-line.svg"
import PinkLineSVG from "../svg/pink-line.svg"
import countries from "../data/country.json"

const SignupPage = () => {
  const [confEmail, setConfEmail] = useState<string>("")
  const [tokenIsSet, setTokenIsSet] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupInput>()

  const [{ data, response }, execute] = useAxios(
    {
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/auth/signup`,
      method: "POST",
    },
    { manual: true }
  )

  const onSubmit: SubmitHandler<ISignupInput> = (formData) => {
    formData && setConfEmail(formData.email)
    execute({ data: { ...formData } })
  }

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

  // Effect to redirect to confirmation page
  useEffect(() => {
    if (response) {
      response.status === 200 &&
        navigate("/signup/confirmation", { state: { email: confEmail } })
    }
  }, [data])

  return (
    <SignupFormContainer>
      <FormHeaderContainer>
        <img src={PurpleLineSVG} alt="Purple line" />

        <span>فرم ثبت نام</span>

        <img src={PinkLineSVG} alt="Pink line" />
      </FormHeaderContainer>

      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputRow>
            <InputContainer>
              <label htmlFor="firstName">نام</label>

              <Input
                id="firstName"
                {...register("first_name", { required: "نام حتما وارد شود" })}
              />

              <ValidationError>
                {errors && errors.first_name?.message}
              </ValidationError>
            </InputContainer>

            <InputContainer>
              <label htmlFor="lname">نام خانوادگی</label>

              <Input
                id="lastName"
                {...register("last_name", {
                  required: "نام خانوادگی حتما وارد شود",
                })}
              />

              <ValidationError>
                {errors && errors.last_name?.message}
              </ValidationError>
            </InputContainer>
          </InputRow>

          <InputRow>
            <InputContainer>
              <label htmlFor="email">ایمیل</label>

              <Input
                type="email"
                id="email"
                {...register("email", {
                  required: "ایمیل حتما وارد شود",
                })}
              />

              <ValidationError>
                {errors && errors.email?.message}
              </ValidationError>
            </InputContainer>

            <InputContainer>
              <label htmlFor="country">کشور</label>

              <CountrySelect {...register("country")}>
                {countries.map((country) => {
                  return (
                    <CountryOption value={country.code} key={country.code}>
                      {country.name}
                    </CountryOption>
                  )
                })}
              </CountrySelect>
            </InputContainer>
          </InputRow>

          <InputRow>
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
              <label htmlFor="password">رمز عبور</label>

              <Input
                type="password"
                id="password"
                {...register("password", {
                  required: "رمز عبور حتما وارد شود",
                })}
              />

              <ValidationError>
                {errors && errors.password?.message}
              </ValidationError>
            </InputContainer>
          </InputRow>

          <Button value={"ثبت نام"} />
        </form>
      </FormContainer>
    </SignupFormContainer>
  )
}

export default SignupPage
