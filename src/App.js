import React from 'react';
// import Log from './components/log';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import RegisterForm from './components/RegisterForm';
// import LoginForm from './components/LoginForm';
import Dashbord from './components/Dashbord';
// import AuthForm from './components/AuthForm';
import { useState } from 'react';
// import { Route } from 'react-router-dom';
// import AdminPanel from './components/AdminPanel'
// import SideBar from './components/SideBar';
// import { PrimeReactProvider, 
//   PrimeReactContext
//  } from 'primereact/api';

// import VerificationEmail from './components/VerificationEmail'
// import Verification from './components/Verification'
// import Random from './components/Random'
import Logrege from './components/Logrege';
// import { Route } from 'react-router-dom';
// import Register from './components/Register'
// import Reglog from './components/Logrege';
// import Login from './components/Login'

// import Footer from './components/Footer'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const handleSignIn = (email) => {
    setIsLoggedIn(true);
    setEmail(email);
  };
  return (
    <>
         {/* <div>
      {!isLoggedIn ? (
        <Logrege onSignIn={handleSignIn} />
      ) : (
        <Dashbord email={email} />
      )}
    </div> */}
      {/* <Footer></Footer> */}
      {/* <Register></Register> */}
      {/* <Login></Login> */}

      {/* <RegisterForm></RegisterForm> */}
      {/* <Reglog></Reglog> */}
      {/* <Logrege></Logrege> */}
      {/* <Log></Log> */}
      {/* <Random></Random> */}
      {/* <Verification></Verification> */}
      {/* <VerificationEmail></VerificationEmail> */}
      {/* <AdminPanel></AdminPanel> */}
      {/* <SideBar></SideBar> */}
      <Router>
        <Routes>
        {/* <Route path="/register" element={<RegisterForm />} /> */}
        {/* <Route path="/login" element={<LoginForm />} /> */}
        {/* <Route path="/" element={<RegisterForm />} /> */}
        {/* <Route path='/authform' element={<AuthForm />} /> */}
        {/* <Route path='/' element={<AuthForm />} /> */}
        <Route path='/logrege' element={<Logrege onSignIn={handleSignIn} />} />
        <Route path="/Dashbord" element={<Dashbord email={email} />} />
        <Route
          path="/"
          element={
            !isLoggedIn ? (
              <Logrege onSignIn={handleSignIn} />
            ) : (
              <Dashbord email={email} />
            )
          }
        />
        </Routes>
      </Router>
      {/* <AuthForm /> */}
      {/* <PrimeReactProvider>
            <SideBar />
        </PrimeReactProvider> */}
    </>
  )
}
