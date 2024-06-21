import React, { useState } from 'react';
import blueImage from "../assets/logigates_new_blue.png";
// import { 
//   // Link,
//    useNavigate } from 'react-router-dom';
// import Dashbord from './Dashbord';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';


function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  // const navigate = useNavigate();
  // const history = useHistory();
  const handleLoginClick = () => setIsLogin(true);
  const handleRegisterClick = () => setIsLogin(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      
      console.log("Logging in with", { email, password });
      // navigate.push('/Dashbord');
      // history.push('/Dashbord')
    } else {
      
      console.log("Registering with", { businessName, businessType, email, password, confirmPassword, phoneNumber, country, city });
    }
  };
  
  
  const regenerateCaptcha = () => setCaptcha(generateCaptcha());
  const generateCaptcha = () =>  Math.floor(Math.random() * 10000);
  const [captcha, setCaptcha] = useState(generateCaptcha());  
  return (
    <div className="flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="bg-dark border border-purple-600 shadow w-full rounded-lg divide-y divide-purple-200">
          <div className="TopBtnn">
            <button style={{backgroundColor:'rgb(234, 179, 179)',color:'brown',borderTop: '2px solid brown'}} onClick={handleLoginClick} className={isLogin ? 'border-b-2 border-blue-500' : ''}>Login</button>
            <button style={{backgroundColor: '#bab4ff',color: '#7367f0',
  borderTop: '2px solid #7367f0'}} onClick={handleRegisterClick} className={!isLogin ? 'border-b-2 border-blue-500' : ''}>Register</button>
          </div>
          <div style={{display: 'flex',flexDirection:'column' ,justifyContent: 'center', alignItems: 'center', height: '200px',padding:'3rem'}}>
            <img src={blueImage} alt="Logigates Logo" style={{maxWidth: '100%', maxHeight: '100%',marginTop:'0rem'}} />
                 <p style={{marginTop:'5px',fontSize:'0.9rem',textAlign:'center',fontWeight:'300'}}>
                    Sign Up to Retail Application
                 </p>
             </div>
          <form className="px-5 py-7" onSubmit={handleSubmit}>
            {isLogin ? (
              <>
                {/* <label className="font-semibold text-sm pb-1 block text-accent-content">E-mail</label> */}
                <input
                  type="email"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {/* <label className="font-semibold text-sm pb-1 block text-accent-content">Password</label> */}
                <input
                  type="password"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="mb-5">
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="ml-2">Remember Me</label>
                </div>
                {/* <Link to={Dashbord}> */}
                <button style={{color:'#fff'}}
                  type="submit"
                  className="transition duration-200 bg-blue-600 text-white w-full py-2.5 rounded-lg text-sm font-semibold text-center inline-block"
                >
                  SIGN IN
                </button> 
                <div className="py-5 text-center" style={{textAlign:'center',marginTop:'2rem'}}>
                  <span>Forget Password? <strong className="text-blue-500 cursor-pointer" style={{color:'rgb(115, 103, 240)',cursor:'pointer'}}>Here</strong></span>
                </div>
              </>
            ) : (
              <>
                {/* <label className="font-semibold text-sm pb-1 block text-accent-content">Business Name</label> */}
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Business Name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
                {/* <label className="font-semibold text-sm pb-1 block text-accent-content">Business Type</label> */}
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Business Type"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  required
                />
                {/* <label className="font-semibold text-sm pb-1 block text-accent-content">Phone Number</label> */}
                <input
                  type="tel"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="05XXXXXXXX"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                {/* <label className="font-semibold text-sm pb-1 block text-accent-content">E-mail</label> */}
                <input
                  type="email"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {/* <label className="font-semibold text-sm pb-1 block text-accent-content">Country</label> */}
                <select
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Austria">Austria</option>
                  <option value="United States of America">United States of America</option>
                  <option value="UAE">UAE</option>
                  <option value="Kingdom of Saudi Arabia">Kingdom of Saudi Arabia</option>
                </select>
                {/* <label className="font-semibold text-sm pb-1 block text-accent-content">City</label> */}
                <select
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                >
                  <option value="">Select City</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Houston">Houston</option>
                  <option value="Philadelphia">Philadelphia</option>
                  <option value="Lahore">Lahore</option>
                </select>
                {/* <label className="font-semibold text-sm pb-1 block text-accent-content">Password</label> */}
                <input
                  type="password"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* <label className="font-semibold text-sm pb-1 block text-accent-content">Confirm Password</label> */}
                <input
                  type="password"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <div className="flex mb-5">
                  <input
                    type="text"
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                    placeholder="Enter Captcha"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    required
                  />
                  <button style={{paddingLeft: '0.75rem',paddingRight: '0.75rem',paddingTop: '0.5rem',paddingBottom: '0.5rem',borderRadius: '0.5rem',background: 'transparent',color:'#7367F0',marginTop:'-1rem'}}
                    type="button"
                    className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold"
                    onClick={regenerateCaptcha}
                  >
                    Regenerate
                  </button>
                </div>
                <div className="checkboxes">
                  <div className="mb-1" style={{marginBottom:'1rem'}}>
                    <input
                      type="checkbox"
                      id="accept-terms"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                    />
                    <label htmlFor="accept-terms" className="ml-2">
                      Accept the <strong className="text-blue-500 cursor-pointer" style={{color:'rgb(115, 103, 240)',cursor:"pointer"}}>Terms of the policy</strong>
                    </label>
                  </div>
                  <div className="mb-5">
                    <input
                      type="checkbox"
                      id="remember-me"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="remember-me" className="ml-2">
                    Remember Me
                    </label>
                  </div>
                </div>
                <button
                  type="submit" style={{color:'#fff'}}
                  className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  {isLogin ? 'SIGN IN' : 'SIGN UP'}
                </button>
                <div className="py-5 text-center" style={{textAlign:'center',marginTop: '2rem'}}>
                  {!isLogin && <span>Already have an account? <strong onClick={handleLoginClick} className="text-blue-500 cursor-pointer" style={{color: 'rgb(115, 103, 240)',
    fontSize: '0.9rem',
    fontFamily: 'sans-serif',cursor:'pointer'}}>Sign in here</strong></span>}
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;