import { useState, useEffect } from "react"
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
  SelectCountry,
  UploadBotton,
} from "./Profile.styled"
import useMediaQuery from "../../../utils/useMediaQuery"
import { getProfile, updateProfile } from "../../../api/requests"
import Loading from "../../loading/AlternativeLoading/Loading"
import Warning from "../../Warning/Warning"

const dataForm = {
  first_name: "",
  last_name: "",
  email: "",
  country: "",
  username: "",
  password: "",
}

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [form, setForm] = useState(dataForm)
  const [isLoading, setIsLoading] = useState(false)
  const [errorText, setErrorText] = useState<string | undefined>()

  useEffect(() => {
    setIsLoading(true)
    getProfile()
      .then((res) => {
        setForm(res.data.data.manager)
      })
      .catch((err) => {
        console.log(err)
        setErrorText("سرور در درسترس نیست ، لطفا بعدا امتحان کنید ... !")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const changeForm: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const saveProfile = (form: { [key: string]: string }) => {
    if (isEdit) {
      setIsLoading(true)
      updateProfile(form)
        .then((_) => {
          setIsEdit(false)
        })
        .catch((err) => {
          console.log(err)
          setErrorText("ثبت اطلاعات با خطا مواجه شد !")
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setIsEdit(true)
    }
  }

  const isMobile = useMediaQuery("(max-width:480px)")

  return (
    <ProfileContainer>
      {isLoading && <Loading />}
      {errorText && <Warning text={errorText} display={setErrorText} />}

      {!isMobile && (
        <HeadTitle>
          <div className="line right" />
          <div className="title">
            <span>اطلاعات فردی</span>
          </div>
          <div className="line left" />
        </HeadTitle>
      )}

      <div className="profile-img">
        <img src={profilePNG} />
        {isEdit && (
          <UploadBotton>
            بارگزاری تصویر
            <UploadLogoSVG className="upload-logo-svg" />
          </UploadBotton>
        )}
      </div>

      <FormContainer>
        <div className="box">
          <span>نام</span>
          {!isEdit ? (
            <span>{form.first_name}</span>
          ) : (
            <InputForm
              name="first_name"
              value={form.first_name}
              onChange={changeForm}
            />
          )}
        </div>
        <div className="box">
          <span>نام خانوادگی</span>
          {!isEdit ? (
            <span>{form.last_name}</span>
          ) : (
            <InputForm
              name="last_name"
              value={form.last_name}
              onChange={changeForm}
            />
          )}
        </div>
        <div className="box">
          <span>ایمیل</span>
          {!isEdit ? (
            <span>{form.email}</span>
          ) : (
            <InputForm name="email" value={form.email} onChange={changeForm} />
          )}
        </div>
        <div className="box">
          <span>کشور</span>
          {!isEdit ? (
            <span>{form.country}</span>
          ) : (
            <SelectCountry
              name="country"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </SelectCountry>
          )}
        </div>
        <div className="box">
          <span>نام کاربری</span>
          {!isEdit ? (
            <span>{form.username}</span>
          ) : (
            <InputForm
              name="username"
              value={form.username}
              onChange={changeForm}
            />
          )}
        </div>
        <div className="box">
          <span>رمزعبور</span>
          {!isEdit ? (
            <PasswordDotSvg className="password-dot-svg" />
          ) : (
            <InputForm name="password" onChange={changeForm} />
          )}
        </div>
      </FormContainer>
      <ButtonEddit
        className={classNames("edit-btn", { editing: isEdit })}
        onClick={() => saveProfile(form)}
      >
        {!isEdit ? (
          <>
            <EditLogoSvg className="edit-logo-svg" />
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
