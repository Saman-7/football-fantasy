import { useState } from "react"
import {
  ButtonGroup,
  Container,
  FormContainer,
  FormHeaderContainer,
  HeaderContainer,
  Input,
  InputContainer,
  SigninButton,
  SigninFormContainer,
  SignupButton,
} from "./Signin.styled"
import LoginHeaderSVG from "../../svg/login-header.svg"
import PLLogoSVG from "../../svg/white-pl-logo.svg"
import PurpleLineSVG from "../../svg/purple-line.svg"
import PinkLineSVG from "../../svg/pink-line.svg"
import axios from "axios"
import { useNavigate } from "react-router-dom"

interface SigninResponse {
  data: {
    managerId: string
    token: string
  }
}

const Signin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  return (
    <Container>
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
              <SigninButton
                value="ورود"
                onClick={async (e) => {
                  e.preventDefault()

                  const response = await axios.post<SigninResponse>(
                    "http://localhost:8080/api/v1/auth/login",
                    { username, password }
                  )

                  const { data } = response.data

                  if (data.managerId.length > 0 && data.token.length > 0) {
                    navigate("../main-page")
                  }
                }}
              />

              <SignupButton
                value="ثبت نام"
                onClick={async (e) => {
                  e.preventDefault()

                  navigate("../signup")
                }}
              />
            </ButtonGroup>
          </form>
        </FormContainer>
      </SigninFormContainer>

      <HeaderContainer>
        <img src={LoginHeaderSVG} alt="Login header" />

        <img src={PLLogoSVG} alt="Premier league" />
      </HeaderContainer>
    </Container>
  )
}

export default Signin
