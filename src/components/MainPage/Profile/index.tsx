import { useState } from "react"
import profilePNG from "../../../images/profile1.png"
import { ReactComponent as PasswordDotSvg } from "../../../svg/password-dot.svg"
import { ReactComponent as EditLogoSvg } from "../../../svg/edit-logo.svg"
import classNames from "classnames"
import { ReactComponent as UploadLogoSVG } from "../../../svg/upload-logo.svg"
import countries from "../../../data/country.json"
import {
  ButtonEddit,
  FormContainer,
  HeadTitle,
  InputForm,
  ProfileContainer,
  SelectForm,
  UploadBotton,
} from "./Profile.styled"

const dataForm = {
  name: "محمد حسین",
  lastName: "مرادیان",
  email: "MohammadHossein@gmail.com",
  country: "Iran",
  usename: "Mhfplplayer",
}

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState(dataForm.name)
  const [lastName, setLastName] = useState(dataForm.lastName)
  const [email, setEmail] = useState(dataForm.email)
  const [country, setCountry] = useState(dataForm.country)
  const [usename, setusername] = useState(dataForm.usename)
  const [password, setPassword] = useState("")

  const changeForm: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target
    if (name === "name") setName(value)
    else if (name === "lastName") setLastName(value)
    else if (name === "email") setEmail(value)
    else if (name === "country") setCountry(value)
    else if (name === "username") setusername(value)
    else if (name === "password") setPassword(value)
  }

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
        {isEdit && (
          <UploadBotton>
            بارگزاری تصویر
            <UploadLogoSVG />
          </UploadBotton>
        )}
      </div>

      <FormContainer>
        <div className="box">
          <span>نام</span>
          {!isEdit ? (
            <span>{name}</span>
          ) : (
            <InputForm name="name" value={name} onChange={changeForm} />
          )}
        </div>
        <div className="box">
          <span>نام خانوادگی</span>
          {!isEdit ? (
            <span>{lastName}</span>
          ) : (
            <InputForm name="lastName" value={lastName} onChange={changeForm} />
          )}
        </div>
        <div className="box">
          <span>ایمیل</span>
          {!isEdit ? (
            <span>{email}</span>
          ) : (
            <InputForm name="email" value={email} onChange={changeForm} />
          )}
        </div>
        <div className="box">
          <span>کشور</span>
          {!isEdit ? (
            <span>{country}</span>
          ) : (
            <SelectForm
              name="country"
              onChange={(e) => setCountry(e.target.value)}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </SelectForm>
          )}
        </div>
        <div className="box">
          <span>نام کاربری</span>
          {!isEdit ? (
            <span>{usename}</span>
          ) : (
            <InputForm name="username" value={usename} onChange={changeForm} />
          )}
        </div>
        <div className="box">
          <span>رمزعبور</span>
          {!isEdit ? (
            <PasswordDotSvg />
          ) : (
            <InputForm name="password" onChange={changeForm} />
          )}
        </div>
      </FormContainer>
      <ButtonEddit
        className={classNames({ editing: isEdit })}
        onClick={() => setIsEdit((isEdit) => !isEdit)}
      >
        {!isEdit ? (
          <>
            <EditLogoSvg />
            ویرایش
          </>
        ) : (
          <>تایید</>
        )}
      </ButtonEddit>
    </ProfileContainer>
  )
}

export default Profile
