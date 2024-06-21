// import React from 'react';
// import React, { useState } from 'react';
// import blueImage from "../assets/logigates_new_blue.png";
// import LoginForm from './LoginForm';
// function RegisterForm() {
//   const [Businessname, setBusinessName] = useState("");
//   const [Businesstype, setBusinesstype] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");
//   const [ConfirmPassword, setConfirmPassword] = useState("");
//   const [PhoneNumber, setPhoneNumber] = useState("");
//   const [Country, setCountry] = useState("");
//   const [City, setCity] = useState("");
//   const [Captcha, setCaptcha] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [acceptTerms, setAcceptTerms] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [showRegisterForm, setShowRegisterForm] = useState(false);

//   const handleLoginClick = () => {
//     setShowLoginForm(true);
//     setShowRegisterForm(false);
//   };

//   const handleRegisterClick = () => {
//     setShowRegisterForm(true);
//     setShowLoginForm(false);
//   };
// return (
//   <form>
//     <div className="flex flex-col justify-center sm:py-12">
//   <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
//   <div className="bg-dark border border-purple-600 shadow w-full rounded-lg divide-y divide-purple-200" style={{borderTopLeftRadius: '0rem',
//   borderTopRightRadius: '0rem'}}>
//   <div>
//     <div className="TopBtnn">
//       <div>
//         <button onClick={handleLoginClick}>Login</button>
//       </div>
//       <div>
//         <button onClick={handleRegisterClick}>Register</button>
//       </div>
//     </div>
//     {showLoginForm && <LoginForm />}
//     {showRegisterForm && <RegisterForm />}
//   </div>
//     <div style={{display: 'flex',flexDirection:'column' ,justifyContent: 'center', alignItems: 'center', height: '200px',padding:'3rem'}}>
//           <img src={blueImage} alt="Logigates Logo" style={{maxWidth: '100%', maxHeight: '100%',marginTop:'0rem'}} />
//                <p style={{marginTop:'5px',fontSize:'0.9rem',textAlign:'center',fontWeight:'300'}}>
//                   Sign Up to Retail Application
//                </p>
//            </div>
//                   <form className="px-5 py-7" 
//                   // onSubmit={handleSubmit}
//                   >
//             <label className="font-semibold text-sm pb-1 block text-accent-content">
//               {/* BusinessName */}
//             </label>
//             <input
//               type="text"
//               className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="BusinessName"
//               value={Businessname}
//               onChange={(e) => setBusinessName(e.target.value)}
//               required={true}
//             />
//             <label className="font-semibold text-sm pb-1 block text-accent-content">
//               {/* BusinessType */}
//             </label>
//             <input
//               type="text"
//               className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="BusinessType"
//               value={Businesstype}
//               onChange={(e) => setBusinesstype(e.target.value)}
//               required={true}
//             />
//             <label className="font-semibold text-sm pb-1 block text-accent-content">
//               {/* PhoneNumber */}
//             </label>
//             <input
//               type="tel"
//               className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="05XXXXXXXX"
//               value={PhoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required={true}
//             />
//                           <label className="font-semibold text-sm pb-1 block text-accent-content">
//               {/* E-mail */}
//             </label>
//             <input
//               type="email"
//               className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Email"
//               value={Email}
//               onChange={(e) => setEmail(e.target.value)}
//               required={true}
//             />
//       <label className="font-semibold text-sm pb-1 block text-accent-content">
//         {/* Country */}
//       </label>
//       <select
//         className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
//         value={Country}
//         onChange={(e) => setCountry(e.target.value)}
//         required={true}
//       >
//         <option value="">Select Country</option>
//         {/* Add options for countries */}
//         <option value="Pakistan">Pakistan</option>
//         <option value="United Kingdom">United Kingdom</option>
//         <option value="Austria">Austria</option>
//         <option value="United States of America">United States of America</option>
//         <option value="UAE">UAE</option>
//         <option value="Kingdom of Saudi Arabia">Kingdom of Saudi Arabia</option>
//       </select>
//       <label className="font-semibold text-sm pb-1 block text-accent-content">
//         {/* City */}
//       </label>
//       <select
//         className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
//         value={City}
//         onChange={(e) => setCity(e.target.value)}
//         required={true}
//       >
//         <option value="">Select City</option>
//         {/* Add options for cities */}
//         <option value="New York">New York</option>
// <option value="Los Angeles">Los Angeles</option>
// <option value="Chicago">Chicago</option>
// <option value="Houston">Houston</option>
// <option value="Philadelphia">Philadelphia</option>
// <option value="Lahore">Lahore</option>
//       </select>
//       <label className="font-semibold text-sm pb-1 block text-accent-content">
//               {/* Password */}
//             </label>
//             <input
//               type="password"
//               className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Password"
//               value={Password}
//               onChange={(e) => setPassword(e.target.value)}
//               required={true}
//             />
//             <label className="font-semibold text-sm pb-1 block text-accent-content">
//               {/* Confirm Password */}
//             </label>
//             <input
//               type="password"
//               className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Confirm Password"
//               value={ConfirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required={true}
//             />
//       <label className="font-semibold text-sm pb-1 block text-accent-content">
//         {/* Captcha */}
//       </label>
//       <input
//         type="text"
//         className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Enter Captcha"
//         value={Captcha}
//         onChange={(e) => setCaptcha(e.target.value)}
//         required={true}
//       />

//             <div className="checkboxes">
//     <div style={{marginBottom:'1rem'}}>
//       <input
//         type="checkbox"
//         id="accept-terms"
//         checked={acceptTerms}
//         onChange={(e) => setAcceptTerms(e.target.checked)}
//       />
//       <label htmlFor="accept-terms">Accept the <strong style={{color:'rgb(115, 103, 240)',cursor:"pointer"}}>Terms of the policy</strong></label>
//     </div>
//     <div style={{marginBottom:'2rem'}}>
//       <input
//         type="checkbox"
//         id="remember-me"
//         checked={rememberMe}
//         onChange={(e) => setRememberMe(e.target.checked)}
//       />
//       <label htmlFor="remember-me">Remember Me</label>
//     </div>
//   </div>
//             <button
//               type="submit"
//               className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
//             >
//               <span className="inline-block mr-2">SIGN UP</span>
//               {/* <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-4 h-4 inline-block"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg> */}
//             </button>
//             {/* <div className="py-5 text-center">
//           <Link
//             to="/login"
//             className="btn btn-neutral text-white"
//             onClick={() => window.scrollTo(0, 0)}
//           >
//             Already have an account? Please login.
//           </Link>
//         </div> */}
//         <div className="py-5 text-center" style={{textAlign:'center'}}>
//              <p className="btn btn-neutral text-grey" style={{color:'grey'}}>Already have an account? <strong style={{color: 'rgb(115, 103, 240)',
//   fontSize: '0.9rem',
//   fontFamily: 'sans-serif',cursor:'pointer'}} onClick={handleLoginClick} >Sign in here</strong></p>
//         </div>
//           </form>

//   </div>
//   {/* <div className="py-5 text-center">
//           <Link
//             to="/login"
//             className="btn btn-neutral text-white"
//             onClick={() => window.scrollTo(0, 0)}
//           >
//             Already have an account? Please login.
//           </Link>
//         </div> */}

//   </div>
//   </div>
//   </form>
// );
// }
// export default RegisterForm;

// import React, { useState, useEffect } from 'react';
// import blueImage from "../assets/logigates_new_blue.png";
// import LoginForm from './LoginForm';

// function RegisterForm() {
//   const [Businessname, setBusinessName] = useState("");
//   const [Businesstype, setBusinesstype] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");
//   const [ConfirmPassword, setConfirmPassword] = useState("");
//   const [PhoneNumber, setPhoneNumber] = useState("");
//   const [Country, setCountry] = useState("");
//   const [City, setCity] = useState("");
//   const [Captcha, setCaptcha] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [acceptTerms, setAcceptTerms] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [showRegisterForm, setShowRegisterForm] = useState(false);
//   const [cities, setCities] = useState([]);
//   const [cityData, setCityData] = useState({
//     id: 0,
//     creationTime: new Date().toISOString(),
//     modificationTime: new Date().toISOString(),
//     creatorId: 0,
//     modifierId: 0,
//     tenantId: 0,
//     cityNameEnglish: '',
//     cityNameArabic: '',
//     countryId: 0,
//     status: true
//   });

//   const handleLoginClick = () => {
//     setShowLoginForm(true);
//     setShowRegisterForm(false);
//   };

//   const handleRegisterClick = () => {
//     setShowRegisterForm(true);
//     setShowLoginForm(false);
//   };

//   // Fetch all cities on component mount
//   useEffect(() => {
//     fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/GetAllCities', {
//       headers: {
//         'Accept': 'text/plain'
//       }
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.status) {
//         setCities(data.data);
//       } else {
//         console.error('Failed to fetch cities:', data.message);
//       }
//     })
//     .catch(error => console.error('Error fetching cities:', error));
//   }, []);

//   const handleCityChange = (e) => {
//     const cityId = e.target.value;
//     setCity(cityId);
//     fetchCityById(cityId);
//   };

//   const fetchCityById = (cityId) => {
//     fetch(`https://retailmanagerapp.azurewebsites.net/api/Cities/GetCityById?id=${cityId}`, {
//       headers: {
//         'Accept': 'text/plain'
//       }
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.status) {
//         setCityData(data.data);
//       } else {
//         console.error('Failed to fetch city:', data.message);
//       }
//     })
//     .catch(error => console.error('Error fetching city:', error));
//   };

//   const handleCreateCity = () => {
//     fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/CreateCity', {
//       method: 'POST',
//       headers: {
//         'Accept': 'text/plain',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(cityData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.status) {
//         // Handle successful city creation
//         console.log('City created successfully');
//       } else {
//         console.error('Failed to create city:', data.message);
//       }
//     })
//     .catch(error => console.error('Error creating city:', error));
//   };

//   const handleUpdateCity = () => {
//     fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/UpdateCity', {
//       method: 'PUT',
//       headers: {
//         'Accept': 'text/plain',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(cityData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.status) {
//         // Handle successful city update
//         console.log('City updated successfully');
//       } else {
//         console.error('Failed to update city:', data.message);
//       }
//     })
//     .catch(error => console.error('Error updating city:', error));
//   };

//   const handleDeleteCity = () => {
//     fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/DeleteCity', {
//       method: 'POST',
//       headers: {
//         'Accept': 'text/plain'
//       },
//       body: JSON.stringify({ id: cityData.id })
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.status) {
//         // Handle successful city deletion
//         console.log('City deleted successfully');
//       } else {
//         console.error('Failed to delete city:', data.message);
//       }
//     })
//     .catch(error => console.error('Error deleting city:', error));
//   };

//   return (
//     <form>
//       {/* Add input fields for registration */}
//       <div className="flex flex-col justify-center sm:py-12">
//         <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
//           <div className="bg-dark border border-purple-600 shadow w-full rounded-lg divide-y divide-purple-200" style={{ borderTopLeftRadius: '0rem', borderTopRightRadius: '0rem' }}>
//             <div>
//               <div className="TopBtnn">
//                 <div>
//                   <button type="button" onClick={handleLoginClick}>Login</button>
//                 </div>
//                 <div>
//                   <button type="button" onClick={handleRegisterClick}>Register</button>
//                 </div>
//               </div>
//               {showLoginForm && <LoginForm />}
//               {showRegisterForm && <RegisterForm />}
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '200px', padding: '3rem' }}>
//               <img src={blueImage} alt="Logigates Logo" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: '0rem' }} />
//               <p style={{ marginTop: '5px', fontSize: '0.9rem', textAlign: 'center', fontWeight: '300' }}>
//                 Sign Up to Retail Application
//               </p>
//             </div>
//             <form className="px-5 py-7" onSubmit={(e) => { e.preventDefault(); handleCreateCity(); }}>
//               <label className="font-semibold text-sm pb-1 block text-accent-content">
//                 BusinessName
//               </label>
//               <input
//                 type="text"
//                 className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
//                 placeholder="BusinessName"
//                 value={Businessname}
//                 onChange={(e) => setBusinessName(e.target.value)}
//                 required
//               />
//               <label className="font-semibold text-sm pb-1 block text-accent-content">
//                 BusinessType
//               </label>
//               <input
//                 type="text"
//                 className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
//                 placeholder="BusinessType"
//                 value={Businesstype}
//                 onChange={(e) => setBusinesstype(e.target.value)}
//                 required
//               />
//               <label className="font-semibold text-sm pb-1 block text-accent-content">
//                 PhoneNumber
//               </label>
//               <input
//                 type="tel"
//                 className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
//                 placeholder="05XXXXXXXX"
//                 value={PhoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 required
//               />
//               <label className="font-semibold text-sm pb-1 block text-accent-content">
//                 E-mail
//               </label>
//               <input
//                 type="email"
//                 className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
//                 placeholder="Email"
//                 value={Email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <label className="font-semibold text-sm pb-1 block text-accent-content">
//                 Country
//               </label>
//               <select
//                 className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
//                 value={Country}
//                 onChange={(e) => setCountry(e.target.value)}
//                 required
//               >
//                 <option value="">Select Country</option>
//                 {/* Add options for countries */}
//                 <option value="Pakistan">Pakistan</option>
//                 <option value="United Kingdom">United Kingdom</option>
//                 <option value="Austria">Austria</option>
//                 <option value="United States of America">United States of America</option>
//                 <option value="UAE">UAE</option>
//                 <option value="Kingdom of Saudi Arabia">Kingdom of Saudi Arabia</option>
//               </select>
//               <label className="font-semibold text-sm pb-1 block text-accent-content">
//                 City
//               </label>
//               <select
//                 className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
//                 value={City}
//                 onChange={handleCityChange}
//                 required
//               >
//                 <option value="">Select City</option>
//                 <option value="New York">New York</option>
//   <option value="Los Angeles">Los Angeles</option>
//   <option value="Chicago">Chicago</option>
//   <option value="Houston">Houston</option>
//   <option value="Philadelphia">Philadelphia</option>
//   <option value="Lahore">Lahore</option>
//                 {cities.map(city => (
//                   <option key={city.id} value={city.id}>{city.cityNameEnglish}</option>
//                 ))}
//               </select>
//               <button onClick={handleUpdateCity}></button>
//               <button onClick={handleDeleteCity}></button>
//               <label className="font-semibold text-sm pb-1 block text-accent-content">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
//                 placeholder="Password"
//                 value={Password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <label className="font-semibold text-sm pb-1 block text-accent-content">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
//                 placeholder="Confirm Password"
//                 value={ConfirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//               <label className="font-semibold text-sm pb-1 block text-accent-content">
//                 Captcha
//               </label>
//               <input
//                 type="text"
//                 className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
//                 placeholder="Enter Captcha"
//                 value={Captcha}
//                 onChange={(e) => setCaptcha(e.target.value)}
//                 required
//               />
//               <div className="checkboxes">
//                 <div style={{ marginBottom: '1rem' }}>
//                   <input
//                     type="checkbox"
//                     id="accept-terms"
//                     checked={acceptTerms}
//                     onChange={(e) => setAcceptTerms(e.target.checked)}
//                   />
//                   <label htmlFor="accept-terms">Accept the <strong style={{ color: 'rgb(115, 103, 240)', cursor: "pointer" }}>Terms of the policy</strong></label>
//                 </div>
//                 <div style={{ marginBottom: '2rem' }}>
//                   <input
//                     type="checkbox"
//                     id="remember-me"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                   />
//                   <label htmlFor="remember-me">Remember Me</label>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
//               >
//                 <span className="inline-block mr-2">SIGN UP</span>
//               </button>
//               <div className="py-5 text-center" style={{ textAlign: 'center' }}>
//                 <p className="btn btn-neutral text-grey" style={{ color: 'grey' }}>Already have an account? <strong style={{ color: 'rgb(115, 103, 240)', fontSize: '0.9rem', fontFamily: 'sans-serif', cursor: 'pointer' }} onClick={handleLoginClick}>Sign in here</strong></p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default RegisterForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blueImage from "../assets/logigates_new_blue.png";
import LoginForm from './LoginForm';
// import Dashbord from './Dashbord';

function RegisterForm() {
  const [Businessname, setBusinessName] = useState("");
  const [Businesstype, setBusinesstype] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Country, setCountry] = useState("");
  const [City, setCity] = useState("");
  const [Captcha, setCaptcha] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const navigate = useNavigate();
  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

    const handleRegisterClick = () => {
      setShowRegisterForm(true);
      setShowLoginForm(false);
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate ('./Dashbord') 
  };

  // const handleLoginClick = () => {
  //   navigate.push('/login');
  // };

  // const handleRegisterClick = () => {
  //   navigate.push('/register');
  // };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-dark border border-purple-600 shadow w-full rounded-lg divide-y divide-purple-200" style={{ borderTopLeftRadius: '0rem', borderTopRightRadius: '0rem' }}>
            <div>
              <div className="TopBtnn">
                <div>
                  <button type="button" onClick={handleLoginClick}>Login</button>
                </div>
                <div>
                  <button type="button" onClick={handleRegisterClick}>Register</button>
                </div>
              </div>
                {showLoginForm && <LoginForm />}
              {showRegisterForm && <RegisterForm />}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '200px', padding: '3rem' }}>
              <img src={blueImage} alt="Logigates Logo" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: '0rem' }} />
              <p style={{ marginTop: '5px', fontSize: '0.9rem', textAlign: 'center', fontWeight: '300' }}>
                Sign Up to Retail Application
              </p>
            </div>
            <form className="px-5 py-7">
              <label className="font-semibold text-sm pb-1 block text-accent-content">BusinessName</label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder="BusinessName"
                value={Businessname}
                onChange={(e) => setBusinessName(e.target.value)}
                required
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">BusinessType</label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder="BusinessType"
                value={Businesstype}
                onChange={(e) => setBusinesstype(e.target.value)}
                required
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">PhoneNumber</label>
              <input
                type="tel"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder="05XXXXXXXX"
                value={PhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">E-mail</label>
              <input
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">Country</label>
              <select
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={Country}
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
              <label className="font-semibold text-sm pb-1 block text-accent-content">City</label>
              <select
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={City}
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
              <label className="font-semibold text-sm pb-1 block text-accent-content">Password</label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">Confirm Password</label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder="Confirm Password"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">Captcha</label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder="Enter Captcha"
                value={Captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                required
              />
              <div className="checkboxes">
                <div style={{ marginBottom: '1rem' }}>
                  <input
                    type="checkbox"
                    id="accept-terms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                  />
                  <label htmlFor="accept-terms">Accept the <strong style={{ color: 'rgb(115, 103, 240)', cursor: "pointer" }}>Terms of the policy</strong></label>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me">Remember Me</label>
                </div>
              </div>
              <button
                type="submit"
                className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">SIGN UP</span>
              </button>
              <div className="py-5 text-center" style={{ textAlign: 'center' }}>
                <p className="btn btn-neutral text-grey" style={{ color: 'grey' }}>Already have an account? <strong style={{ color: 'rgb(115, 103, 240)', fontSize: '0.9rem', fontFamily: 'sans-serif', cursor: 'pointer' }} onClick={handleLoginClick}>Sign in here</strong></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </form>
    </>
  );
}

export default RegisterForm;
