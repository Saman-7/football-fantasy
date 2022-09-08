import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  ButtonGroup,
  FormContainer,
  FormHeaderContainer,
  Input,
  InputContainer,
  SigninButton,
  SigninFormContainer,
  SignupButton,
} from "../components/Login/Signin.styled"
import PurpleLineSVG from "../svg/purple-line.svg"
import PinkLineSVG from "../svg/pink-line.svg"

const SigninPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")

    token && navigate("/main-page")
  }, [])

  const handleSignin = async (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault()

    const response = await axios.post(
      "http://178.216.248.37:8080/api/v1/auth/login",
      { username, password }
    )

    const { data } = response.data

    localStorage.setItem("token", JSON.stringify(data.token))

    navigate("/main-page")
  }

  return (
    <SigninFormContainer>
      <FormHeaderContainer>
        <img src={PurpleLineSVG} alt="Purple line" />

        <span>ورود به فانتزی</span>

        <img src={PinkLineSVG} alt="Pink line" />
      </FormHeaderContainer>

      <FormContainer>
        <form>
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
            <label htmlFor="password">رمزعبور</label>

            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>

          <ButtonGroup>
            <SigninButton value="ورود" onClick={handleSignin} />

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
