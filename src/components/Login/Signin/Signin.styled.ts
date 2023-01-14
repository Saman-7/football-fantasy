import styled from "styled-components"

export const SigninFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35.75rem;
  margin-top: 9.3125rem;
  margin-right: 6.25rem;
`

export const FormContainer = styled.div`
  display: flex;
`

export const FormHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5625rem;

  & span {
    font-weight: 400;
    font-size: 24px;
    color: #ffffff;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  & label {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 1rem;
    color: #edd8ff;
    text-align: right;
  }
`

export const Input = styled.input`
  width: 35.75rem;
  height: 3rem;
  box-sizing: border-box;
  background: #3d185b;
  border: 0.0625rem solid #a057db;
  border-radius: 0.5rem;
  outline: none;
  font-family: "Vazirmatn";
  font-size: 1.25rem;
  color: #edd8ff;
`

export const ButtonGroup = styled.div`
  width: 35.75rem;
  height: 3rem;
  margin-top: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const SigninButton = styled.input.attrs({
  type: "submit",
})`
  box-sizing: border-box;
  width: 17.0625rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  background: linear-gradient(90deg, #cf31b9 0%, #9b3af9 73.44%);
  font-family: "Vazirmatn";
  font-weight: 300;
  font-size: 1.25rem;
  color: #ffffff;
  cursor: pointer;
`

export const SignupButton = styled.input.attrs({
  type: "submit",
})`
  box-sizing: border-box;
  width: 17.0625rem;
  height: 3rem;
  border: 0.125rem solid;
  border-radius: 0.5rem;
  border-image-source: linear-gradient(90deg, #c847af 1.65%, #9b3af9 43.98%);
  border-image-slice: 1;
  background: #3d185b;
  font-family: "Vazirmatn";
  font-weight: 300;
  font-size: 1.25rem;
  color: #ffffff;
  cursor: pointer;
`

export const ValidationError = styled.p`
  color: red;
  margin-top: 0.5rem;
`
