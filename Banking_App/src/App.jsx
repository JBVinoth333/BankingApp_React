import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import SignupPage1 from './signupPage/SignupPage1';
import LoginPage from './loginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<SignupPage1 />} />
        <Route path="/signup" element={<SignupPage1 />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
