import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginLayout from "./components/Login/LoginLayout"
import SigninPage from "./pages/SigninPage"
import SignupPage from "./pages/SignupPage"
import MainPageLayout from "./components/MainPage/MainPageLayout"
import MyTeamPage from "./pages/MyTeamPage"
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route element={<LoginLayout />}>
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>

          <Route element={<MainPageLayout />}>
            <Route path="/main/my-team" element={<MyTeamPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
