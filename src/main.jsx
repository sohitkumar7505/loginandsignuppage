import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'



createRoot(document.getElementById('root')).render(
  <Router>
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    {/* You can set a default route here */}
    <Route path="/" element={<LoginPage />} /> {/* Default to Login */}
  </Routes>
</Router>,
)


