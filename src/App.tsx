import { Routes, Route } from "react-router-dom"
import LoginLayout from "./components/Login/LoginLayout"
import SigninPage from "./pages/SigninPage"
import SignupPage from "./pages/SignupPage"
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
