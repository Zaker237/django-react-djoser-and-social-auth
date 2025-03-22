
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage } from './views/LoginPage'
import { IndexPage } from './views/IndexPage'
import { SignupPage } from './views/SignupPage'


function App() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Router>
        <div className="flex w-full items-center justify-center">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
