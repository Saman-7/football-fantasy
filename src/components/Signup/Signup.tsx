import {
  Container,
  HeaderContainer,
  FormHeaderContainer,
  InputContainer,
} from "../Signin/Signin.styled"
import {
  SignupFormContainer,
  FormContainer,
  InputRow,
  Input,
  Button,
} from "./Signup.styled"
import LoginHeaderSVG from "../../svg/login-header.svg"
import PLLogoSVG from "../../svg/white-pl-logo.svg"
import PurpleLineSVG from "../../svg/purple-line.svg"
import PinkLineSVG from "../../svg/pink-line.svg"
import CountryInput from "./CountryInput"
import { useState } from "react"

const Signup = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("AF")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Container>
      <SignupFormContainer>
        <FormHeaderContainer>
          <img src={PurpleLineSVG} alt="Purple line" />

          <span>فرم ثبت نام</span>

          <img src={PinkLineSVG} alt="Pink line" />
        </FormHeaderContainer>

        <FormContainer>
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

          <Button value={"ثبت نام"} />
        </FormContainer>
      </SignupFormContainer>

      <HeaderContainer>
        <img src={LoginHeaderSVG} alt="Login header" />

        <img src={PLLogoSVG} alt="Premier league" />
      </HeaderContainer>
    </Container>
  )
}

export default Signup
