import { lazy, Suspense } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoadingMain from "./components/loading/LoadingMain"

const LoginLayout = lazy(() => import("./components/Login/LoginLayout"))
const MainPageLayout = lazy(
  () => import("./components/MainPage/MainPageLayout")
)
const SigninPage = lazy(() => import("./pages/SigninPage"))
const SignupPage = lazy(() => import("./pages/SignupPage"))
const MyTeamPage = lazy(() => import("./pages/MyTeamPage"))

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            element={
              <Suspense fallback={<LoadingMain />}>
                <LoginLayout />
              </Suspense>
            }
          >
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>

          <Route
            element={
              <Suspense fallback={<LoadingMain />}>
                <MainPageLayout />
              </Suspense>
            }
          >
            <Route path="/main/my-team" element={<MyTeamPage />} />
          </Route>

          {/* Test route for components */}
          <Route path="" element={<></>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
