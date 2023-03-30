import { LogIn } from "./pages/login";
import { SignUp } from "./pages/signup";
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// const LogIn = lazy(() => import('./pages/login'));


function App() {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
      {/* <LogIn /> */}
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/dashboard" element={<>Loading...</>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<LogIn />} /> 
        </Routes>
      </Suspense>
    </>
  )
}

export default App;
