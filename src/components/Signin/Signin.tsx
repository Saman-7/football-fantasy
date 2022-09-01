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

const Signin = () => {
  const [signinState, setSigninState] = useState({ username: "", password: "" })

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
                value={signinState.username}
                onChange={(e) => {
                  setSigninState({
                    ...signinState,
                    username: e.target.value,
                    password: signinState.password,
                  })
                }}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="password">رمزعبور</label>

              <Input
                type="password"
                id="password"
                name="password"
                value={signinState.password}
                onChange={(e) => {
                  setSigninState({
                    ...signinState,
                    username: signinState.username,
                    password: e.target.value,
                  })
                }}
              />
            </InputContainer>

            <ButtonGroup>
              <SigninButton
                value="ثبت نام"
                onClick={(e) => e.preventDefault()}
              />

              <SignupButton value="ورود" onClick={(e) => e.preventDefault()} />
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
