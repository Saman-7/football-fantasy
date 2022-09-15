import styled from "styled-components"

export const Container = styled.div`
  width: 35.75rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid rgba(61, 25, 91, 0.8);

  & input {
    border: transparent;
    width: 100%;
    outline: none;
    font-family: Vazirmatn;
    font-size: 1.125rem;
    font-weight: 300;
    text-align: right;
    color: rgba(61, 25, 91, 1);
  }

  & input::placeholder {
    font-family: Vazirmatn;
    font-size: 0.875rem;
    font-weight: 300;
    text-align: right;
  }

  & svg {
    height: 1.5625rem;
    width: 1.5625rem;
    margin-right: 1.5625rem;
    margin-left: 1.0625rem;
  }
`
