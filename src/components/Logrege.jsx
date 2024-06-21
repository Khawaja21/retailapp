import { useNavigate } from "react-router-dom";
import blueImage from "../assets/logigates_new_blue.png";
import React,{ useState, useEffect} from 'react';
// import { 
//   Link,
//    useNavigate,
// useHistory
//  } from 'react-router-dom';
// import Dashbord from './Dashbord';
// import {  } from 'react-router-dom';
import axios from 'axios';
function Logrege( { onSignIn } ) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userIdToDelete, setUserIdToDelete] = useState("");
  // const [users, setUsers] = useState([]);
// Get all users
useEffect(() => {
  fetch('https://retailmanagerapp.azurewebsites.net/api/User/GetAllUsers', {
    method: 'GET',
    headers: {
      'accept': 'text/plain'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setEmail(data.data);
  })
  .catch(error => console.error('Error fetching users:', error));
}, []);



  const [rememberMe, setRememberMe] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState({ countryNameEnglish: '', countryNameArabic: '', countryId: 0, status: true });
  const [error, setError] = useState(null);
  const navigate = useNavigate;
    // Get all countries
    useEffect(() => {
      fetch('https://retailmanagerapp.azurewebsites.net/api/Country/GetAllCountries', {
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.status && data.message === "Success") {
          setCountries(data.data);
        } else {
          console.error("Failed to fetch countries:", data.message);
        }
      })
      .catch(error => {
        console.error("Error fetching countries:", error);
      });
    }, []);
    // Get countriesbyId
    useEffect(() => {
      fetch('https://retailmanagerapp.azurewebsites.net/api/Country/GetCountryById', {
        headers: {
          'accept': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.status && data.data) {
          setCountry(data.data.name);
        } else {
          setError("Failed to fetch country: " + data.message);
        }
      })
      .catch(error => {
        setError("Error fetching country: " + error.message);
      });
    }, []);

    // create country
    const createCountry = () => {
      const data = {
        id: 0,
        creationTime: new Date().toISOString(),
        modificationTime: new Date().toISOString(),
        creatorId: 0,
        modifierId: 0,
        tenantId: 0,
        countryNameEnglish: "string",
        countryNameArabic: "string",
        status: true
      };
  
      fetch('https://retailmanagerapp.azurewebsites.net/api/Country/CreateCountry', {
        method: 'POST',
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          console.log("Country created successfully:", data);
        } else {
          console.error("Failed to create country:", data.message);
        }
      })
      .catch(error => {
        console.error("Error creating country:", error);
      });
    }; 
    // update country
    const updateCountry = (countryData) => {
      fetch('https://retailmanagerapp.azurewebsites.net/api/Country/UpdateCountry', {
        method: 'PUT',
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(countryData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          console.log("Country updated successfully");
        } else {
          console.error("Failed to update country:", data.message);
        }
      })
      .catch(error => {
        console.error("Error updating country:", error);
      });
    };

    // Delete country
    const deleteCountry = () => {
      fetch('https://retailmanagerapp.azurewebsites.net/api/Country/DeleteCountry', {
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.status) {
            console.log("Country deleted successfully");
          } else {
            console.error("Failed to delete country:", data.message);
          }
        })
        .catch(error => {
          console.error("Error deleting country:", error);
        });
    };
  

  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [newCity, setNewCity] = useState({ cityNameEnglish: '', cityNameArabic: '', countryId: 0, status: true });
  const [cityById, setCityById] = useState(null);
  const [eror, setEror] = useState(null);
  // GetAllCities
  useEffect(() => {
    fetch('/api/Cities/GetAllCities', {
      headers: {
        'accept': 'text/plain',
        'Content-Type': 'application/json',
        'Accept' : 'text/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.status && data.message === "Success") {
        setCities(data.data);
      } else {
        console.error("Failed to fetch cities:", data.message);
      }
    })
    .catch(error => {
      console.error("Error fetching cities:", error);
    });
  }, []);
// GetcityById
const fetchCityById = (cityId) => {
  fetch(`/api/Cities/GetCityById?id=${cityId}`, {
    headers: {
      'accept': 'text/plain',
      'Content-Type': 'application/json',
      'Accept' : 'text/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.status && data.data) {
        setCountry(data.data.name);
      } else {
        setEror("City does not exist: " + data.message);
      }
    })
    .catch(error => {
      setEror("Error fetching city by ID: ", + error.message);
    });
};
// fetchCityById
useEffect(() => {
  const cityId = [];
  fetchCityById(cityId);
}, []);
// CreateCity
const createCity = () => {
  fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/CreateCity', {
    method: 'POST',
    headers: {
      'accept': 'text/plain',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 0,
      creationTime: new Date().toISOString(),
      modificationTime: new Date().toISOString(),
      creatorId: 0,
      modifierId: 0,
      tenantId: 0,
      cityNameEnglish: "",
      cityNameArabic: "",
      cityId: 0,
      status: true
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.status) {
        console.log("City created successfully:", data.data);
      } else {
        console.error("Failed to create city:", data.message);
      }
    })
    .catch(error => {
      console.error("Error creating city:", error);
    });
};
// UpdateCity
const updateCity = () => {
  fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/UpdateCity', {
    method: 'PUT',
    headers: {
      'accept': 'text/plain',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 1,
      creationTime: new Date().toISOString(),
      modificationTime: new Date().toISOString(),
      creatorId: 0,
      modifierId: 0,
      tenantId: 0,
      cityNameEnglish: "",
      cityNameArabic: "",
      countryId: 0,
      status: true
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.status) {
        console.log("City updated successfully:", data.data);
      } else {
        console.error("Failed to update city:", data.message);
      }
    })
    .catch(error => {
      console.error("Error updating city:", error);
    });
};
// DeleteCity
const deleteCity = () => {
  fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/DeleteCity', {
    method: 'POST',
    headers: {
      'accept': 'text/plain',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 1
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.status) {
        console.log("City deleted successfully:", data.data);
      } else {
        console.error("Failed to delete city:", data.message);
      }
    })
    .catch(error => {
      console.error("Error deleting city:", error);
    });
};
  const [acceptTerms, setAcceptTerms] = useState(false);
  // const navigate = useNavigate();
  // const history = useHistory();
  const handleLoginClick = () => setIsLogin(true);
  const handleRegisterClick = () => setIsLogin(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      
      console.log("Logging in with", { email, password });
      // navigate.push('/Dashbord');
      // history.push('/Dashbord');

      // get user by sign in
      try {
        const response = await fetch('https://retailmanagerapp.azurewebsites.net/api/User/SingIn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'accept': 'text/plain'
          },
          body: JSON.stringify({ email, password })
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Login successful:', data);
          onSignIn(email);
          navigate('/Dashbord');
        } else {
          const errorData = await response.json();
          console.error('Login failed:', errorData);
          alert('Login failed. Please check your credentials and try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
      onSignIn(email);
      navigate('/Dashbord');
    } else {
      
      console.log("Registering with", { businessName, businessType, email, password, confirmPassword, phoneNumber, country, city });
      // Creating a user
      const userData = {
        id: 0,
        creationTime: new Date().toISOString(),
        modificationTime: new Date().toISOString(),
        creatorId: 0,
        modifierId: 0,
        tenantId: 0,
        status: true,
        nameInEnglish: businessName,
        nameInArabic: businessName,
        username: email,
        password: password,
        email: email,
        mobileNo: phoneNumber,
        countryId: 0,
        cityId: 0,
        businessName: businessName,
        businessType: businessType,
        roleId: 0
      };
      try {
        const response = await axios.post('https://retailmanagerapp.azurewebsites.net/api/User/CreateUser', userData, {
          headers: {
            'Content-Type': 'application/json',
            'accept': 'text/plain'
          }
        });
        if (response.data.status) {
          console.log('User created successfully');
          alert('User registered successfully. Please log in.');
          handleLoginClick();
        } else {
          console.log('User creation failed:', response.data.message);
          alert(`Registration failed: ${response.data.message}`);
        }
      } catch (error) {
        console.error('Error creating user', error);
        alert('An error occurred during registration. Please try again later.');
      }
        // Updating a user
        try {
          const response = await fetch('https://retailmanagerapp.azurewebsites.net/api/User/UpdateUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'accept': 'text/plain'
            },
          });
          const responseData = await response.json();
          if (response.ok) {
            console.log('User updated successfully:', responseData);
            alert('User registered successfully.');
          } else {
            console.error('User update failed:', responseData);
            alert('User registration failed. Please try again.');
          }
        } catch (error) {
          console.error('Error updating user:', error);
          alert('An error occurred. Please try again later.');
        }

        // Delete User



      // await createUser({
      //   id: 0,
      //   creationTime: new Date().toISOString(),
      //   modificationTime: new Date().toISOString(),
      //   creatorId: 0,
      //   modifierId: 0,
      //   tenantId: 0,
      //   status: true,
      //   nameInEnglish: businessName,
      //   nameInArabic: businessName, 
      //   username: email,
      //   password: btoa(password), 
      //   email,
      //   mobileNo: phoneNumber,
      //   countryId: 0, 
      //   cityId: 0, 
      //   businessName,
      //   businessType,
      //   roleId: 0
      // });


      // 

    //  creating a user
      createCountry();

      const countryData = {
        id: 0,
        creationTime: new Date().toISOString(),
        modificationTime: new Date().toISOString(),
        creatorId: 0,
        modifierId: 0,
        tenantId: 0,
        countryNameEnglish: country,
        countryNameArabic: country,
        status: true
      };

      // get user by id
      const fetchUserById = async () => {
        try {
          const response = await axios.get('https://retailmanagerapp.azurewebsites.net/api/User/GetUserById', {
            headers: {
              'accept': 'text/plain',

            }
          });
    
          console.log('User data:', response.data);
        } catch (error) {
          if (error.response && error.response.status === 401) {
            console.error('Unauthorized access - please log in');

          } else {
            console.error('An error occurred:', error);
          }
        }
      };
    
      // useEffect(() => {

        fetchUserById();
      // }
      // ,
      //  []);
  //   }
  // };

  // const signInUser = async (username, password) => {
  //   try {
  //     const response = await axios.post('https://retailmanagerapp.azurewebsites.net/api/User/SingIn', null, {
  //       params: {
  //         username,
  //         password
  //       }
  //     });
  //     if (response.status === 200) {
  //       console.log("Login successful");
  //       onSignIn(username);
  //       navigate('/Dashbord');
  //     }
  //   } catch (error) {
  //     console.error("Login failed", error);
  //   }

  //   signInUser();
  // };

  // const createUser = async (userData) => {
  //   try {
  //     const response = await axios.post('https://retailmanagerapp.azurewebsites.net/api/User/CreateUser', userData, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     if (response.data.status) {
  //       console.log("User created successfully");
  //       // Redirect to login or dashboard as needed
  //     } else {
  //       console.log("User creation failed:", response.data.message);
  //     }
  //   } catch (error) {
  //     console.error("Error creating user", error);
  //   }
  // };

      updateCountry(countryData);

    }
  };
  // Delete user
  const handleDeleteUser = async () => {
    try {
      const response = await fetch('https://retailmanagerapp.azurewebsites.net/api/User/DeleteUser', {
        method: 'POST',
        headers: {
          'accept': 'text/plain'
        },
        body: JSON.stringify({ userId: userIdToDelete }) 
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Delete successful:', data);
        alert('User deleted successfully.');
      } else {
        const errorData = await response.json();
        console.error('Delete failed:', errorData);
        alert('Delete failed. Please try again.');
      }
    }catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
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
            <button style={{flex:'1',backgroundColor:'rgb(234, 179, 179)',color:'brown',borderTop: '2px solid brown',
    padding:'1rem 1rem',
    textAlign:'center',orderRight: isLogin ? '1px solid brown' : 'none'}} onClick={handleLoginClick} 
    // className={isLogin ? 'border-b-2 border-blue-500' : ''}
    >Login</button>
            <button style={{flex:'1',backgroundColor: '#bab4ff',color: '#7367f0',
  borderTop: '2px solid #7367f0',
    padding:'1rem 1rem',
    textAlign:'center',borderLeft: !isLogin ? '1px solid #7367f0' : 'none'}} onClick={handleRegisterClick}
    //  className={!isLogin ? 'border-b-2 border-blue-500' : ''}
     >Register</button>
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
                  onClick={handleDeleteUser}
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
                  {countries.map(country => (
                    <option key={country.id} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <div className="mt-4">
        <h3 className="font-semibold text-sm pb-1 block text-accent-content">Add a New Country</h3>
        <input
          type="text"
          placeholder="Country Name English"
          value={newCountry.countryNameEnglish}
          onChange={(e) => setNewCountry({ ...newCountry, countryNameEnglish: e.target.value })}
          className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
        />
        <input
          type="text"
          placeholder="Country Name Arabic"
          value={newCountry.countryNameArabic}
          onChange={(e) => setNewCountry({ ...newCountry, countryNameArabic: e.target.value })}
          className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
        />
        <input
          type="number"
          placeholder="Country ID"
          value={newCountry.countryId}
          onChange={(e) => setNewCountry({ ...newCountry, countryId: Number(e.target.value) })}
          className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
        />
        <button onClick={ () => createCountry(country)} disabled={!country} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          CreateCountry
        </button>
        <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
        onClick={() => updateCountry(country)}
        disabled={!country}
      >
        Update Country
      </button>
      <button
        className="mt-3 bg-red-500 text-white py-2 px-4 rounded"
        onClick={() => deleteCountry(country)}
        disabled={!country}
      >
        Delete Country
      </button>
      {error && <div className="text-red-500 mt-3">{error}</div>}
      </div>
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
                  {/* {cities.map(city => (
                    <option key={city.id} value={city.cityNameEnglish}>
                      {city.cityNameEnglish}
                    </option>
                  ))} */}
                </select>
                <div className="mt-4">
        <h3 className="font-semibold text-sm pb-1 block text-accent-content">Add a New City</h3>
        <input
          type="text"
          placeholder="City Name English"
          value={newCity.cityNameEnglish}
          onChange={(e) => setNewCity({ ...newCity, cityNameEnglish: e.target.value })}
          className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
        />
        <input
          type="text"
          placeholder="City Name Arabic"
          value={newCity.cityNameArabic}
          onChange={(e) => setNewCity({ ...newCity, cityNameArabic: e.target.value })}
          className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
        />
        <input
          type="number"
          placeholder="City ID"
          value={newCity.cityId}
          onChange={(e) => setNewCity({ ...newCity, cityId: Number(e.target.value) })}
          className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
        />
        <button onClick={ () => createCity(city)} disabled={!city} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          CreateCity
        </button>
        <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
        onClick={() => updateCity(city)}
        disabled={!city}
      >
        Update City
      </button>
      <button
        className="mt-3 bg-red-500 text-white py-2 px-4 rounded"
        onClick={() => deleteCity(city)}
        disabled={!city}
      >
        Delete City
      </button>
      {eror && <div className="text-red-500 mt-3">{eror}</div>}
      </div>
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
          {/* Add input and button for deleting a user */}
          {/* <div className="px-5 py-7">
            <input
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              placeholder="User ID to delete"
              value={userIdToDelete}
              onChange={(e) => setUserIdToDelete(e.target.value)}
              required
            />
            <button
              type="button"
              style={{ color: '#fff' }}
              className="transition duration-200 bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              onClick={handleDeleteUser}
            >
              DELETE USER
            </button>
          </div> */}
        </div>
      </div>
    </div>
        
  );
}

export default Logrege;
