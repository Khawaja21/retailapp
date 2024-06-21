import React,{useState} from 'react';

import blueImage from "../assets/logigates_new_blue.png";

import LoginForm from "../components/LoginForm";

import RegisterForm from './RegisterForm';


export default function VerificationEmail() {
    const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

   const handleLoginClick = () => {
      setShowLoginForm(true);
      setShowRegisterForm(false);
    };
    
    const handleRegisterClick = () => {
        setShowRegisterForm(true);
        setShowLoginForm(false);
    };
    return (
        <>
  <form>
    <div className="flex flex-col justify-center sm:py-12">
  <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
  <div className="bg-dark border border-purple-600 shadow w-full rounded-lg divide-y divide-purple-200" style={{borderTopLeftRadius: '0rem',borderTopRightRadius: '0rem',borderBottomLeftRadius:'1rem',borderBottomRightRadius:'1rem'}}>
   <div>
   <div className="TopBtnn">
        <div> <button onClick={handleLoginClick}>Login</button> </div>
        <div><button onClick={handleRegisterClick}>Register</button></div>
   </div>
   {showLoginForm && <LoginForm />}
    {showRegisterForm && <RegisterForm />}
   </div>
    <div style={{display: 'flex',flexDirection:'column' ,justifyContent: 'center', alignItems: 'center', height: '200px',padding:'3rem'}}>
          <img src={blueImage} alt="Logigates Logo" style={{maxWidth: '100%', maxHeight: '100%',marginTop:'0rem'}} />
               <span style={{marginTop:'5px',fontSize:'1rem',textAlign:'center',fontWeight:'300'}}>
                  Sign Up to Retail Application
               </span>
               <span style={{fontSize:'0.9rem',textAlign:'center',marginTop:'1rem'}}>
                You need to Enter an Email or Mobile Number for you to get the Verification code
               </span>
           </div>
                  <form className="px-5 py-7" 
                  // onSubmit={handleSubmit}
                  >
                          <label className="font-semibold text-sm pb-1 block text-accent-content">
              {/* E-mail */}
            </label>
            <input
              type="email"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
      <label className="font-semibold text-sm pb-1 block text-accent-content">
              {/* Password */}
            </label>
            <input
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="05XXXXXXXX"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
            <button
              type="submit"
              className="transition duration-200 bg-blue-600 text-white w-full py-2.5 rounded-lg text-sm  font-semibold text-center inline-block" style={{marginTop:'1rem'}}
            >
              <span className="inline-block mr-2">NEXT</span>
            </button>
            {/* <div className="py-5 text-center">
          <Link
            to="/login"
            className="btn btn-neutral text-white"
            onClick={() => window.scrollTo(0, 0)}
          >
            Already have an account? Please login.
          </Link>
        </div> */}
          </form>

  </div>
  {/* <div className="py-5 text-center">
          <Link
            to="/login"
            className="btn btn-neutral text-white"
            onClick={() => window.scrollTo(0, 0)}
          >
            Already have an account? Please login.
          </Link>
        </div> */}

  </div>

  </div>
  </form>
    </>
  );
}