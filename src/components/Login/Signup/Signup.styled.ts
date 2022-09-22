import styled from "styled-components"

export const SignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35.75rem;
  margin-top: 5.375rem;
  margin-right: 6.25rem;
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const InputRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 17.125rem;
  outline: none;
  color: #ffffff;
  height: 3rem;
  background: #3d185b;
  border: 0.0625rem solid #a057db;
  border-radius: 0.5rem;
`

export const Button = styled.input.attrs({
  type: "submit",
})`
  margin-top: 3rem;
  width: 35.6875rem;
  height: 3rem;
  background: linear-gradient(90deg, #cf31b9 0%, #9b3af9 73.44%);
  border: none;
  border-radius: 0.5rem;
  font-family: "Vazirmatn";
  font-weight: 400;
  font-size: 1.25rem;
  color: #ffffff;
  cursor: pointer;
`
