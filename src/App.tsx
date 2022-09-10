import { Routes, Route } from "react-router-dom"
import LoginLayout from "./components/Login/LoginLayout"
import SigninPage from "./pages/SigninPage"
import SignupPage from "./pages/SignupPage"
import MainPage from "./pages/MainPage"
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route path="main-page" element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
