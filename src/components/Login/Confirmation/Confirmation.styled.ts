import styled from "styled-components"

export const ConfirmationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35.75rem;
  margin-top: 5.375rem;
  margin-right: 6.25rem;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6.25rem;
  margin-bottom: 5.3125rem;

  & span {
    text-align: center;
    font-size: 16px;
    color: #edd8ff;
    margin-bottom: 1rem;
  }
`

export const ValidationError = styled.div`
  color: red;
  margin-top: 0.5rem;
`
