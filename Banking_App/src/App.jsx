import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import SignupPage from './signupPage/SignupPage';

// import LoginPage from './loginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
