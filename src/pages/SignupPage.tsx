import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import CountryInput from "../components/Login/CountryInput"
import {
  FormHeaderContainer,
  InputContainer,
} from "../components/Login/Signin.styled"
import {
  SignupFormContainer,
  FormContainer,
  InputRow,
  Input,
  Button,
} from "../components/Login/Signup.styled"
import PurpleLineSVG from "../svg/purple-line.svg"
import PinkLineSVG from "../svg/pink-line.svg"

const SignupPage = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("AF")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")

    token && navigate("/main-page")
  }, [])

  return (
    <SignupFormContainer>
      <FormHeaderContainer>
        <img src={PurpleLineSVG} alt="Purple line" />

        <span>فرم ثبت نام</span>

        <img src={PinkLineSVG} alt="Pink line" />
      </FormHeaderContainer>

      <FormContainer>
        <form>
          <InputRow>
            <InputContainer>
              <label htmlFor="fname">نام</label>

              <Input
                id="fname"
                name="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="lname">نام خانوادگی</label>

              <Input
                id="lname"
                name="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </InputContainer>
          </InputRow>

          <InputRow>
            <InputContainer>
              <label htmlFor="email">ایمیل</label>

              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="country">کشور</label>

              <CountryInput
                id="country"
                name="country"
                value={country}
                handleChange={setCountry}
              />
            </InputContainer>
          </InputRow>

          <InputRow>
            <InputContainer>
              <label htmlFor="username">نام کاربری</label>

              <Input
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="password">رمز عبور</label>

              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputContainer>
          </InputRow>

          <Button
            value={"ثبت نام"}
            onClick={(e) => {
              e.preventDefault()

              navigate("/main-page")
            }}
          />
        </form>
      </FormContainer>
    </SignupFormContainer>
  )
}

export default SignupPage
