import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './components/custom/login-page'
import LandingPage from './app/page'

function App() {

  return (
    <>
      {/* <LoginPage></LoginPage> */}
      {/* <LandingPage></LandingPage> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
