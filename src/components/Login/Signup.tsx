import axios from "axios"
import CountryInput from "./CountryInput"
import {
  SignupFormContainer,
  FormContainer,
  InputRow,
  Input,
  Button,
} from "./Signup.styled"
import { FormHeaderContainer, InputContainer } from "./Signin.styled"
import PurpleLineSVG from "../../svg/purple-line.svg"
import PinkLineSVG from "../../svg/pink-line.svg"

interface SignupProps {
  formData: {
    fname: string
    lname: string
    email: string
    country: string
    username: string
    password: string
  }
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

const Signup = (props: SignupProps) => {
  const { fname, lname, email, country, username, password } = props.formData

  const { handleChange, setSubmitted } = props

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
                onChange={handleChange}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="lname">نام خانوادگی</label>

              <Input
                id="lname"
                name="lname"
                value={lname}
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="country">کشور</label>

              <CountryInput
                id="country"
                name="country"
                value={country}
                handleChange={handleChange}
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
                onChange={handleChange}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="password">رمز عبور</label>

              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </InputContainer>
          </InputRow>

          <Button
            value={"ثبت نام"}
            onClick={async (e) => {
              e.preventDefault()

              const response = await axios.post(
                "http://178.216.248.37:8080/api/v1/auth/signup",
                {
                  first_name: fname,
                  last_name: lname,
                  username,
                  email,
                  country,
                  password,
                }
              )

              if (response.data.msg === "ok") {
                setSubmitted(true)
              }
            }}
          />
        </form>
      </FormContainer>
    </SignupFormContainer>
  )
}

export default Signup
