import { lazy, Suspense } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import LoadingMain from "./components/loading/LoadingMain/LoadingMain"
import { useAuthInterseptor } from "./api/useAuthInterceptor"

const LoginLayout = lazy(() => import("./components/Login/LoginLayout"))
const MainPageLayout = lazy(
  () => import("./components/MainPage/MainPageLayout")
)
const SigninPage = lazy(() => import("./pages/SigninPage"))
const SignupPage = lazy(() => import("./pages/SignupPage"))
const MyTeamPage = lazy(() => import("./pages/MyTeamPage"))
const EventPage = lazy(() => import("./pages/EventsPage"))
const TransfersPage = lazy(() => import("./pages/TransfersPage"))

const App = () => {
  useAuthInterseptor()
  return (
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
          <Route path="/main/transfers" element={<TransfersPage />} />
          <Route path="/main/events" element={<EventPage />} />
        </Route>

        {/* Test route for components */}
        <Route path="/event" element={<></>} />
      </Routes>
    </div>
  )
}

export default App
