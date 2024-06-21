// import React from 'react';
// import React, { useState } from 'react';
// import blueImage from "../assets/logigates_new_blue.png";
// import RegisterForm from './RegisterForm';
// function LoginForm() {
//     const [Email, setEmail] = useState("");
//     const [Password, setPassword] = useState("");
//     const [rememberMe, setRememberMe] = useState(false);
//     const [showLoginForm, setShowLoginForm] = useState(false);
//     const [showRegisterForm, setShowRegisterForm] = useState(false);
  
//     const handleLoginClick = () => {
//       setShowLoginForm(true);
//       setShowRegisterForm(false);
//     };
  
//     const handleRegisterClick = () => {
//       setShowRegisterForm(true);
//       setShowLoginForm(false);
//     };
//   return (
//     <form>
//       <div className="flex flex-col justify-center sm:py-12">
//     <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
//     <div className="bg-dark border border-purple-600 shadow w-full rounded-lg divide-y divide-purple-200" style={{borderTopLeftRadius: '0rem',
//     borderTopRightRadius: '0rem'}}>
//      <div>
//      <div className="TopBtnn">
//           <div> <button onClick={handleLoginClick}>Login</button> </div>
//           <div><button onClick={handleRegisterClick}>Register</button></div>
//      </div>
//      {showLoginForm && <LoginForm />}
//       {showRegisterForm && <RegisterForm />}
//      </div>
//       <div style={{display: 'flex',flexDirection:'column' ,justifyContent: 'center', alignItems: 'center', height: '200px',padding:'3rem'}}>
//             <img src={blueImage} alt="Logigates Logo" style={{maxWidth: '100%', maxHeight: '100%',marginTop:'0rem'}} />
//                  <p style={{marginTop:'5px',fontSize:'0.9rem',textAlign:'center',fontWeight:'300'}}>
//                     Sign Up to Retail Application
//                  </p>
//              </div>
//                     <form className="px-5 py-7" 
//                     // onSubmit={handleSubmit}
//                     >
//                             <label className="font-semibold text-sm pb-1 block text-accent-content">
//                 {/* E-mail */}
//               </label>
//               <input
//                 type="email"
//                 className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Email"
//                 value={Email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required={true}
//               />
//         <label className="font-semibold text-sm pb-1 block text-accent-content">
//                 {/* Password */}
//               </label>
//               <input
//                 type="password"
//                 className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Password"
//                 value={Password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required={true}
//               />
//                     <div style={{marginBottom:'2rem'}}>
//         <input
//           type="checkbox"
//           id="remember-me"
//           checked={rememberMe}
//           onChange={(e) => setRememberMe(e.target.checked)}
//           style={{height:'15px',width:'23px'}}
//         />
//         <label htmlFor="remember-me">Remember Me</label>
//       </div>
//               <button
//                 type="submit"
//                 className="transition duration-200 bg-blue-600 text-white w-full py-2.5 rounded-lg text-sm  font-semibold text-center inline-block"
//               >
//                 <span className="inline-block mr-2">SIGN IN</span>
//                 {/* <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-4 h-4 inline-block"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg> */}
//               </button>
//               <div className="py-5 text-center" style={{textAlign:'center',paddingTop:'1rem'}}>
//                 <span style={{fontSize: '0.8rem',
//     fontFamily: 'sans-serif'}}>Forget Password? <strong style={{color:'rgb(115, 103, 240)',cursor:'pointer'}}>Here</strong></span>
//           </div>
//               {/* <div className="py-5 text-center">
//             <Link
//               to="/login"
//               className="btn btn-neutral text-white"
//               onClick={() => window.scrollTo(0, 0)}
//             >
//               Already have an account? Please login.
//             </Link>
//           </div> */}
//             </form>

//     </div>
//     {/* <div className="py-5 text-center">
//             <Link
//               to="/login"
//               className="btn btn-neutral text-white"
//               onClick={() => window.scrollTo(0, 0)}
//             >
//               Already have an account? Please login.
//             </Link>
//           </div> */}

//     </div>

//     </div>
//     </form>
//   );
// }
// export default LoginForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blueImage from "../assets/logigates_new_blue.png";

function LoginForm () {

  // const handleRegisterClick = () => {
  //   navigate.push('/Register');
    
  // };
  // const handleLoginClick = () => {
    
  //   navigate.push('/Login');
  // };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here

    navigate('/Dashboard'); 
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-dark border border-purple-600 shadow w-full rounded-lg divide-y divide-purple-200" style={{ borderTopLeftRadius: '0rem', borderTopRightRadius: '0rem' }}>
            <div className="TopBtnn">
              <button type='button' 
              // onClick={handleLoginClick}
              > Login</button>
              <button type="button" 
              // onClick={handleRegisterClick}
              >Register</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '200px', padding: '3rem' }}>
              <img src={blueImage} alt="Logigates Logo" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: '0rem' }} />
              <p style={{ marginTop: '5px', fontSize: '0.9rem', textAlign: 'center', fontWeight: '300' }}>
                Sign Up to Retail Application
              </p>
            </div>
            <div className="px-5 py-7">
              <label className="font-semibold text-sm pb-1 block text-accent-content">Email</label>
              <input
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">Password</label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button
                type="submit"
                className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">
                <label>

                LOGIN
                </label>
                </span>
              </button>
              <div className="py-5 text-center" style={{ textAlign: 'center' }}>
                <p className="btn btn-neutral text-grey" style={{ color: 'grey' }}>Don't have an account? <strong style={{ color: 'rgb(115, 103, 240)', fontSize: '0.9rem', fontFamily: 'sans-serif', cursor: 'pointer' }} 
                // onClick={handleRegisterClick}
                >Register here</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
