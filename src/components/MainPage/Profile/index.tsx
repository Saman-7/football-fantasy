import { useState } from "react"
import styled from "styled-components"
import profilePNG from "../../../images/profile1.png"
import { ReactComponent as PasswordDotSvg } from "../../../svg/password-dot.svg"
import { ReactComponent as EditLogoSvg } from "../../../svg/edit-logo.svg"

const ProfileContainer = styled.div`
  height: 39.75rem;
  width: 35.6875rem;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & .profile-img {
    & img {
      width: 100px;
      height: 100px;
    }
  }
`

const HeadTitle = styled.div`
  width: 100%;
  height: 3.3125rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .title {
    font-weight: 800;
    font-size: 20px;
    color: #3d195b;
  }

  & .line {
    width: 174px;
    height: 0px;
    &.right {
      border: 2px solid #04f5ec;
      background-color: #04f5ec;
    }
    &.left {
      border: 2px solid #00ff87;
      background-color: #00ff87;
    }
  }
`

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 16px;

  & .box {
    width: 273px;
    height: 54px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    & span:first-child {
      font-weight: 400;
      font-size: 16px;
      color: #333333;
    }
    & span:last-child {
      font-weight: 800;
      font-size: 16px;
      color: #3d195b;
    }
  }
`

const ButtonEddit = styled.button`
  width: 372px;
  height: 48px;
  background: white;
  border: 1px solid #3d195b;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  color: #3d195b;
  font-family: vazirmatn;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 84px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #3d195b;
    & svg {
      fill: white;
    }
  }

  & svg {
    width: 24px;
    height: 24px;
    margin-left: 6px;
  }
`

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <ProfileContainer>
      <HeadTitle>
        <div className="line right" />
        <div className="title">
          <span>اطلاعات فردی</span>
        </div>
        <div className="line left" />
      </HeadTitle>

      <div className="profile-img">
        <img src={profilePNG} />
      </div>

      <FormContainer>
        <div className="box">
          <span>نام</span>
          <span>محمد حسین</span>
        </div>
        <div className="box">
          <span>نام خانوادگی</span>
          <span>مرادیان</span>
        </div>
        <div className="box">
          <span>ایمیل</span>
          <span>MohammadHossein@gmail.com</span>
        </div>
        <div className="box">
          <span>کشور</span>
          <span>ایران</span>
        </div>
        <div className="box">
          <span>نام کاربری</span>
          <span>Mhfplplayer</span>
        </div>
        <div className="box">
          <span>رمزعبور</span>
          <PasswordDotSvg />
        </div>
      </FormContainer>
      <ButtonEddit>
        <EditLogoSvg />
        ویرایش
      </ButtonEddit>
    </ProfileContainer>
  )
}

export default Profile
