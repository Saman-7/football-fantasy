import styled from "styled-components"
import Header from "../svg/EPL Players 2 1.svg"
import LineSVG from "../svg/Line 1.svg"

const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #3d185b;
`

const HeaderContainer = styled.div`
  width: 574px;
  height: 100vh;
  display: flex;
`

const SigninFormContainer = styled.div`
  width: 792px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormHeaderContainer = styled.div`
  display: flex;
  margin-top: 149px;
  margin-bottom: 9px;
`

const FormHeader = styled.span`
  margin-left: 24px;
  margin-right: 24px;
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
`

const FormContainer = styled.div``

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`

const Label = styled.label`
  margin-bottom: 16px;
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #edd8ff;
  text-align: right;
`

const Input = styled.input`
  width: 572px;
  height: 48px;
  box-sizing: border-box;
  background: #3d185b;
  border: 1px solid #a057db;
  border-radius: 8px;
  outline: none;
`

const ButtonGroup = styled.div`
  width: 572px;
  height: 48px;
  margin-top: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SignupButton = styled.input.attrs({
  type: "submit",
})`
  box-sizing: border-box;
  width: 273px;
  height: 48px;
  background: #3d185b;
  border: 2px solid;
  border-radius: 8px;
  border-image-source: linear-gradient(90deg, #c847af 1.65%, #9b3af9 43.98%);
  border-image-slice: 1;
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;
`

const SigninButton = styled.input.attrs({
  type: "submit",
})`
  box-sizing: border-box;
  width: 273px;
  height: 48px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #cf31b9 0%, #9b3af9 73.44%);
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;
`

const SigninPage = () => {
  return (
    <MainContainer>
      <HeaderContainer>
        <img src={Header} alt="Header" />
      </HeaderContainer>

      <SigninFormContainer>
        <FormHeaderContainer>
          <img src={LineSVG} alt="Line 1" />

          <FormHeader>ورود به فانتزی</FormHeader>

          <img src={LineSVG} alt="Line 2" />
        </FormHeaderContainer>

        <FormContainer>
          <form>
            <InputContainer>
              <Label htmlFor="username">نام کاربری</Label>
              <Input id="username" name="username" />
            </InputContainer>

            <InputContainer>
              <Label htmlFor="password">رمزعبور</Label>
              <Input type="password" id="password" name="password" />
            </InputContainer>

            <ButtonGroup>
              <SignupButton value="ثبت نام" />

              <SigninButton value="ورود" />
            </ButtonGroup>
          </form>
        </FormContainer>
      </SigninFormContainer>
    </MainContainer>
  )
}

export default SigninPage
