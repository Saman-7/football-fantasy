import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Confirmation from "../components/Login/Confirmation"
import Signup from "../components/Login/Signup"

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    country: "AF",
    username: "",
    password: "",
  })

  const handleSignupChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const [code, setCode] = useState("")

  const handleConfirmationChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCode(e.target.value)

  const [submitted, setSubmitted] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token") || "{}")

    if (Object.keys(token).length !== 0 || token !== undefined) {
      navigate("/main-page")
    }
  }, [])

  if (submitted) {
    return (
      <Confirmation
        code={code}
        email={formData.email}
        handleChange={handleConfirmationChange}
      />
    )
  } else {
    return (
      <Signup
        formData={formData}
        handleChange={handleSignupChange}
        setSubmitted={setSubmitted}
      />
    )
  }
}

export default SignupPage
