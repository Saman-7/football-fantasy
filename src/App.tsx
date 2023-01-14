import { lazy, Suspense, useEffect } from "react"
import "./App.css"
import { Routes, Route, useNavigate } from "react-router-dom"
import LoadingMain from "./components/loading/LoadingMain/LoadingMain"
import { useAuthInterseptor } from "./api/useAuthInterceptor"
import Loading from "./components/loading/AlternativeLoading/Loading"
import ProfilePage from "./pages/ProfilePage"

const LoginLayout = lazy(() => import("./components/Login/LoginLayout"))
const MainPageLayout = lazy(
  () => import("./components/MainPage/MainPageLayout")
)
const SigninPage = lazy(() => import("./pages/SigninPage"))
const SignupPage = lazy(() => import("./pages/SignupPage"))
const ConfirmationPage = lazy(() => import("./pages/ConfirmationPage"))
const MyTeamPage = lazy(() => import("./pages/MyTeamPage"))
const EventPage = lazy(() => import("./pages/EventsPage"))
const TransfersPage = lazy(() => import("./pages/TransfersPage"))

const App = () => {
  useAuthInterseptor()

  const navigate = useNavigate()
  useEffect(() => {
    if (window.location.pathname === "/") navigate("/main/my-team")
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route
          element={
            <Suspense fallback={<Loading />}>
              <LoginLayout />
            </Suspense>
          }
        >
          <Route
            path="/signin"
            element={
              <Suspense fallback={<Loading />}>
                <SigninPage />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<Loading />}>
                <SignupPage />
              </Suspense>
            }
          />
          <Route
            path="/signup/confirmation"
            element={
              <Suspense fallback={<Loading />}>
                <ConfirmationPage />
              </Suspense>
            }
          />
        </Route>

        <Route
          element={
            <Suspense fallback={<LoadingMain />}>
              <MainPageLayout />
            </Suspense>
          }
        >
          <Route
            path="/main/my-team"
            element={
              <Suspense fallback={<Loading />}>
                <MyTeamPage />
              </Suspense>
            }
          />
          <Route
            path="/main/transfers"
            element={
              <Suspense fallback={<Loading />}>
                <TransfersPage />
              </Suspense>
            }
          />
          <Route
            path="/main/events"
            element={
              <Suspense fallback={<Loading />}>
                <EventPage />
              </Suspense>
            }
          />
          <Route
            path="/main/profile"
            element={
              <Suspense fallback={<Loading />}>
                <ProfilePage />
              </Suspense>
            }
          />
        </Route>

        {/* Test route for components */}
        <Route path="/" element={<></>} />
      </Routes>
    </div>
  )
}

export default App
