import styled from "styled-components"

export const ProfileContainer = styled.div`
  height: 39.75rem;
  width: 35.6875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & .profile-img {
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
      width: 6.25rem;
      height: 6.25rem;
    }

    & button {
      font-family: vazirmatn;
      margin-top: 0.625rem;
      font-weight: 400;
      font-size: 0.875rem;
      color: #3d195b;
      display: flex;
      justify-content: center;
      align-items: center;
      & svg {
        margin-right: 0.3125rem;
      }
    }
  }
`

export const HeadTitle = styled.div`
  width: 100%;
  height: 3.3125rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .title {
    font-weight: 800;
    font-size: 1.25rem;
    color: #3d195b;
  }

  & .line {
    width: 10.875rem;
    height: 0rem;
    &.right {
      border: 0.125rem solid #04f5ec;
      background-color: #04f5ec;
    }
    &.left {
      border: 0.125rem solid #00ff87;
      background-color: #00ff87;
    }
  }
`

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1rem;

  & .box {
    width: 17.0625rem;
    height: 4.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    & span:first-child {
      font-weight: 400;
      font-size: 1rem;
      color: #333333;
    }
    & span:last-child {
      font-weight: 800;
      font-size: 1rem;
      color: #3d195b;
    }
  }
`

export const InputForm = styled.input`
  width: 100%;
  height: 3rem;
  background: #f4f4f4;
  border-radius: 0.5rem;
  border: none;
  margin-top: 0.625rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5625rem;
  color: #333333;
  font-family: vazirmatn;
  text-align: center;
`

export const SelectForm = styled.select`
  width: 100%;
  height: 3rem;
  background: #f4f4f4;
  border-radius: 0.5rem;
  border: none;
  margin-top: 0.625rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5625rem;
  color: #333333;
  font-family: vazirmatn;
  text-align: center;
`

export const ButtonEddit = styled.button`
  width: 23.25rem;
  height: 3rem;
  background: white;
  border: 0.0625rem solid #3d195b;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: #3d195b;
  font-family: vazirmatn;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4.0625rem;
  cursor: pointer;
  &:hover:not(.editing) {
    color: white;
    background-color: #3d195b;
    & svg {
      fill: white;
    }
  }

  &.editing {
    background-color: #00ff87;
    border: none;
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.375rem;
  }
`

export const UploadBotton = styled.button`
  width: 10.8125rem;
  height: 2rem;
  background: #ebff00;
  border: 0.0625rem solid #ebff00;
  border-radius: 0.25rem;
  cursor: pointer;
`
