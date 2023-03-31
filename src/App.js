import { LogIn } from "./pages/login";
import { SignUp } from "./pages/signup";
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<LogIn />} /> 
      </Routes>
    </>
  )
}

export default App;
