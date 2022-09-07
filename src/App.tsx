import "./App.css"
import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import SigninPage from "./pages/SigninPage"
import SignupPage from "./pages/SignupPage"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="main-page" element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
