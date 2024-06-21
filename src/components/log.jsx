import React, { useState , useEffect } from 'react';
import blueImage from "../assets/logigates_new_blue.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Log() {
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

function LoginForm() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
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
    <form>
      <div className="flex flex-col justify-center sm:py-12">
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <div className="bg-dark border border-purple-600 shadow w-full rounded-lg divide-y divide-purple-200" style={{borderTopLeftRadius: '0rem',
    borderTopRightRadius: '0rem'}}>
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
                 <p style={{marginTop:'5px',fontSize:'0.9rem',textAlign:'center',fontWeight:'300'}}>
                    Sign Up to Retail Application
                 </p>
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
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
                    <div style={{marginBottom:'2rem'}}>
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          style={{height:'15px',width:'23px'}}
        />
        <label htmlFor="remember-me">Remember Me</label>
      </div>
              <button
                type="submit"
                className="transition duration-200 bg-blue-600 text-white w-full py-2.5 rounded-lg text-sm  font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">SIGN IN</span>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg> */}
              </button>
              <div className="py-5 text-center" style={{textAlign:'center',paddingTop:'1rem'}}>
                <span style={{fontSize: '0.8rem',
    fontFamily: 'sans-serif'}}>Forget Password? <strong style={{color:'rgb(115, 103, 240)',cursor:'pointer'}}>Here</strong></span>
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
  );
}

function RegisterForm() {
  const [userId, setUserId] = useState(1);
    const [Businessname, setBusinessName] = useState("");
    const [businessNames, setBusinessNames] = useState([]);

    useEffect(() => {
      const fetchBusinessNames = async () => {
        try {
          const response = await fetch('https://retailmanagerapp.azurewebsites.net/api/User/GetAllUsers', {
            headers: {
              'Accept': 'text/plain'
            }
          });
          const data = await response.json();
          if (data.status && data.data.length > 0) {
            setBusinessNames(data.data);
          }
        } catch (error) {
          console.error('Error fetching business names:', error);
        }
      };
  
      fetchBusinessNames();
    }, []);
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`https://retailmanagerapp.azurewebsites.net/api/User/GetUserById?id=${userId}`, {
            headers: {
              'accept': 'text/plain',
              // 'Authorization': '' 
            }
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
  
          if (data.status) {
          
            setBusinessName(data.data.businessName);
            setEmail(data.data.email);
          
          } else {
            console.error("Error fetching user data:", data.message);
          }
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };
  
      fetchUserData();
    }, [userId]);
    const handleUserCreation = async (e) => {
      e.preventDefault();
  
      if (Password !== ConfirmPassword) {
        alert("Passwords do not match!");
        return;
      }
  
      const userPayload = {
        id: 0,
        creationTime: new Date().toISOString(),
        modificationTime: new Date().toISOString(),
        creatorId: 0,
        modifierId: 0,
        tenantId: 0,
        status: true,
        nameInEnglish: Businessname,
        nameInArabic: "",
        username: Email,
        password: Password,
        email: Email,
        mobileNo: "", 
        countryId: 0,
        cityId: 0,
        businessName: Businessname,
        businessType: "", 
        roleId: 0 
      };
  
      try {
        const response = await fetch('https://retailmanagerapp.azurewebsites.net/api/User/CreateUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'accept': 'text/plain'
          },
          body: JSON.stringify(userPayload)
        });
  
        const result = await response.json();
  
        if (response.ok) {
          navigate('/Dashboard');
        } else {
          alert(`Failed to create user: ${result.message}`);
        }
      } catch (error) {
        alert(`An error occurred: ${error.message}`);
      }
      const userData = {
        id: 0,
        creationTime: new Date().toISOString(),
        modificationTime: new Date().toISOString(),
        creatorId: 0,
        modifierId: 0,
        tenantId: 0,
        status: true,
        nameInEnglish: Businessname,
        nameInArabic: Businessname, 
        username: Email, 
        password: Password,
        email: Email,
        mobileNo: "", 
        countryId: 0, 
        cityId: 0, 
        businessName: Businessname,
        fmcid: "", 
        roleId: 0 
      };
      try {
        const response = await fetch('https://retailmanagerapp.azurewebsites.net/api/User/UpdateUser', {
          method: 'POST',
          headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
  
        if (response.ok) {
          
          navigate('/Dashboard');
        } else {
          const errorData = await response.json();
          console.error('Error updating user:', errorData);
          alert('Failed to update user');
        }
      } catch (error) {
        console.error('Network error:', error);
        alert('Network error occurred');
      }
      const handleDelete = async () => {
        try {
          const response = await axios.post('https://retailmanagerapp.azurewebsites.net/api/User/DeleteUser', {});
          console.log(response.data);
          
        } catch (error) {
          console.error("There was an error deleting the user!", error);
          
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

      };
    
    };




  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
      
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();

    //   navigate('/Dashboard');
    // };


    const [Businesstype, setBusinesstype] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    // const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const response = await fetch('https://retailmanagerapp.azurewebsites.net/api/User/SingIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'text/plain',
      },
      body: JSON.stringify({
        username: Email,
        password: Password,
      }),
    });

    if (response.ok) {

      navigate('/Dashboard');
    } else {

      const errorData = await response.json();
      setError(errorData.title || 'Login failed. Please try again.');
    }
  };

    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    
    const [Country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [newCountryEnglish, setNewCountryEnglish] = useState('');
  const [newCountryArabic, setNewCountryArabic] = useState('');

  useEffect(() => {
    fetch('https://retailmanagerapp.azurewebsites.net/api/Country/GetAllCountries', {
      headers: {
        'Accept': 'text/plain'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setCountries(data.data); 
        } else {
          console.error('Failed to fetch countries:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);
  useEffect(() => {
    fetch('https://retailmanagerapp.azurewebsites.net/api/Country/GetAllCountries', {
      headers: {
        'Accept': 'text/plain'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setCountries(data.data);
        } else {
          console.error('Failed to fetch countries:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);
  useEffect(() => {
    fetch('https://retailmanagerapp.azurewebsites.net/api/Country/GetAllCountries', {
      headers: {
        'Accept': 'text/plain'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setCountries(data.data); 
        } else {
          console.error('Failed to fetch countries:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);
  const updateCountry = (selectedCountry) => {
    const countryData = {
      id: 0,
      creationTime: new Date().toISOString(),
      modificationTime: new Date().toISOString(),
      creatorId: 0, 
      modifierId: 0,
      tenantId: 0, 
      countryNameEnglish: selectedCountry,
      countryNameArabic: "", 
      status: true,
    };

    fetch('https://retailmanagerapp.azurewebsites.net/api/Country/UpdateCountry', {
      method: 'PUT',
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(countryData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          console.log('Country updated successfully');
        } else {
          console.error('Failed to update country:', data.message);
        }
      })
      .catch(error => {
        console.error('Error updating country:', error);
      });
  };  

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    if (selectedCountry) {
      updateCountry(selectedCountry);
    }
  };
  const handleCreateCountry = (e) => {
    e.preventDefault();
    const newCountry = {
      id: 0,
      creationTime: new Date().toISOString(),
      modificationTime: new Date().toISOString(),
      creatorId: 0,
      modifierId: 0,
      tenantId: 0,
      countryNameEnglish: newCountryEnglish,
      countryNameArabic: newCountryArabic,
      status: true
    };

    fetch('https://retailmanagerapp.azurewebsites.net/api/Country/CreateCountry', {
      method: 'POST',
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCountry)
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setCountries([...countries, newCountryEnglish]);
          setNewCountryEnglish('');
          setNewCountryArabic('');
          console.log('Country created successfully:', data.message);
        } else {
          console.error('Failed to create country:', data.message);
        }
      })
      .catch(error => {
        console.error('Error creating country:', error);
      });
  };
  const handlecountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    
    deleteCountry(selectedCountry);
  };

  const deleteCountry = (selectedCountry) => {
    fetch(`https://retailmanagerapp.azurewebsites.net/api/Country/DeleteCountry?id=${selectedCountry}`, {
      method: 'GET',
      headers: {
        'Accept': 'text/plain'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          console.log(`Successfully deleted ${selectedCountry}`);
        } else {
          console.error('Failed to delete country:', data.message);
        }
      })
      .catch(error => {
        console.error('Error deleting country:', error);
      });
  };

    const [Captcha, setCaptcha] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);

      const [city, setCity] = useState("");
      const [cities, setCities] = useState([]);
      const [newCity, setNewCity] = useState({ cityNameEnglish: '', cityNameArabic: '', countryId: 0, status: true });
      const [error, setError] = useState(null);
       


      const [selectedCityId, setSelectedCityId] = useState(null);
      const [cityData, 
        setCityData
      ] = useState({
        id: 0,
        creationTime: new Date().toISOString(),
        modificationTime: new Date().toISOString(),
        creatorId: 0,
        modifierId: 0,
        tenantId: 0,
        cityNameEnglish: '',
        cityNameArabic: '',
        countryId: 0,
        status: true
      });
      useEffect(() => {
        fetchCities();
      }, []);
    
      const fetchCities = () => {
        fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/GetAllCities', {
          headers: {
            'Accept': 'text/plain'
          }
        })
          .then(response => response.json())
          .then(data => {
            if (data.status) {
              setCities(data.data);
            } else {
              console.error('Failed to fetch cities:', data.message);
            }
          })
          .catch(error => {
            console.error('Error fetching cities:', error);
          });
      };
    
      const handleCityChange = (e) => {
        const cityId = e.target.value;
        setSelectedCityId(cityId);
        const selectedCity = cities.find(city => city.id === cityId);
        if (selectedCity) {
          setCityData({
            ...cityData,
            id: selectedCity.id,
            cityNameEnglish: selectedCity.cityNameEnglish,
            cityNameArabic: selectedCity.cityNameArabic,
            countryId: selectedCity.countryId
          });
        }
      };
    
      useEffect(() => {
        fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/GetAllCities', {
          headers: {
            'Accept': 'text/plain, text/json',
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(data => {
            if (data.status) {
              setCities(data.data);
            } else {
              console.error('Failed to fetch cities:', data.message);
            }
          })
          .catch(error => {
            console.error('Error fetching cities:', error);
          });
      }, []);
      useEffect(() => {
        fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/GetAllCities', {
          headers: {
            'Accept': 'text/plain, text/json',
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(data => {
            if (data.status && Array.isArray(data.data)) {
              setCities(data.data);
            } else {
              console.error('Failed to fetch cities:', data.message);
            }
          })
          .catch(error => {
            console.error('Error fetching cities:', error);
          });
      }, []);
      useEffect(() => {
        fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/GetAllCities', {
          headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(data => {
            if (data.status) {
              setCities(data.data);
            } else {
              console.error('Failed to fetch cities:', data.message);
            }
          })
          .catch(error => {
            console.error('Error fetching cities:', error);
          });
      }, []);
      useEffect(() => {
    fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/GetAllCities', {
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setCities(data.data); 
        } else {
          console.error('Failed to fetch cities:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });
      }, []);
      useEffect(() => {
        fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/GetAllCities', {
          headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(data => {
            if (data.status) {
              setCities(data.data); // Assuming data.data is an array of city names
            } else {
              setError('Failed to fetch cities: ' + data.message);
            }
          })
          .catch(error => {
            setError('Error fetching cities: ' + error.message);
          });
      }, []);
    
      const deleteCity = (cityName) => {
        fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/DeleteCity', {
          method: 'POST',
          headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: cityName })
        })
          .then(response => response.json())
          .then(data => {
            if (data.status) {
              setCities(cities.filter(city => city !== cityName));
              setCity('');
            } else {
              setError('Failed to delete city: ' + data.message);
            }
          })
          .catch(error => {
            setError('Error deleting city: ' + error.message);
          });
      };
  const handleUpdateCity = () => {
    const updatedCityData = {
      ...cityData,
      cityNameEnglish: city, 
    };

    fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/UpdateCity', {
      method: 'PUT',
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedCityData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          console.log('City updated successfully:', data);
        } else {
          console.error('Failed to update city:', data.message);
        }
      })
      .catch(error => {
        console.error('Error updating city:', error);
      });
  };
      const handleAddCity = () => {
        fetch('https://retailmanagerapp.azurewebsites.net/api/Cities/CreateCity', {
          method: 'POST',
          headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newCity)
        })
          .then(response => response.json())
          .then(data => {
            if (data.status) {
              setCities([...cities, data.data.cityNameEnglish]);
              setNewCity({ cityNameEnglish: '', cityNameArabic: '', countryId: 0, status: true });
              console.log('City created successfully:', data.message);
            } else {
              console.error('Failed to create city:', data.message);
            }
          })
          .catch(error => {
            console.error('Error creating city:', error);
          });
      };
    
    

  


    const handleLoginClick = () => {
      setShowLoginForm(true);
      setShowRegisterForm(false);
    };
  
    const handleRegisterClick = () => {
      setShowRegisterForm(true);
      setShowLoginForm(false);
    };
  return (
    <form> 
      {/* Add input fields for registration */}
      <div className="flex flex-col justify-center sm:py-12">
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <div className="bg-dark border border-purple-600 shadow w-full rounded-lg divide-y divide-purple-200" style={{borderTopLeftRadius: '0rem',
    borderTopRightRadius: '0rem'}}>
    <div>
      <div className="TopBtnn">
        <div>
          <button onClick={handleLoginClick}>Login</button>
        </div>
        <div>
          <button onClick={handleRegisterClick}>Register</button>
        </div>
      </div>
      {showLoginForm && <LoginForm />}
      {showRegisterForm && <RegisterForm />}
    </div>
      <div style={{display: 'flex',flexDirection:'column' ,justifyContent: 'center', alignItems: 'center', height: '200px',padding:'3rem'}}>
            <img src={blueImage} alt="Logigates Logo" style={{maxWidth: '100%', maxHeight: '100%',marginTop:'0rem'}} />
                 <p style={{marginTop:'5px',fontSize:'0.9rem',textAlign:'center',fontWeight:'300'}}>
                    Sign Up to Retail Application
                 </p>
             </div>
                    <form className="px-5 py-7" 
                    // onSubmit={handleSubmit}
                    >
              <label className="font-semibold text-sm pb-1 block text-accent-content" onSubmit={handleSubmit}>
                {/* BusinessName */}
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="BusinessName"
                value={Businessname}
                onChange={(e) => setBusinessName(e.target.value)}
                required={true}
              />

              <label className="font-semibold text-sm pb-1 block text-accent-content">
                {/* BusinessType */}
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="BusinessType"
                value={Businesstype}
                onChange={(e) => setBusinesstype(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                {/* PhoneNumber */}
              </label>
              <input
                type="tel"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="05XXXXXXXX"
                value={PhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required={true}
              />
                            <label className="font-semibold text-sm pb-1 block text-accent-content" onSubmit={handleSubmit}>
                {/* E-mail */}
              </label>
              <input
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <div>
        <label className="font-semibold text-sm pb-1 block text-accent-content">
          {/* Country */}
        </label>
        <select
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          value={Country}
          onChange={(e) => setCountry(e.target.value)}
          required={true}
          onClick={handleCountryChange}
          onClickCapture ={handlecountryChange}
        >
          <option value="">Select Country</option>
          {/* Add options for countries */}
          <option value="Pakistan">Pakistan</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Austria">Austria</option>
          <option value="United States of America">United States of America</option>
          <option value="UAE">UAE</option>
          <option value="Kingdom of Saudi Arabia">Kingdom of Saudi Arabia</option>
          {countries.map((countryName, index) => (
          <option key={index} value={countryName}>
            {countryName}
          </option>
        ))}
        </select>
        <form onSubmit={handleCreateCountry}>
        <label className="font-semibold text-sm pb-1 block text-accent-content">
          Add New Country
        </label>
        <input
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
          placeholder="Country Name (English)"
          value={newCountryEnglish}
          onChange={(e) => setNewCountryEnglish(e.target.value)}
          required
        />
        <input
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
          placeholder="Country Name (Arabic)"
          value={newCountryArabic}
          onChange={(e) => setNewCountryArabic(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded-lg px-3 py-2 mt-1">
          Create Country
        </button>
        {/* <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
        onClick={updateCountry}
      >
        Update Country
      </button> */}
      </form>
      </div>
      <div>
        <label className="font-semibold text-sm pb-1 block text-accent-content">
          {/* City */}
        </label>
        <select
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          defaultValue={city}
          value={selectedCityId || ''}
          onChange={(e) => setCity(e.target.value)}
          required={true}
          onClick={handleCityChange}
        >
        <option value="">Select City</option>
          {/* Add options for cities */}
          <option value="New York">New York</option>
  <option value="Los Angeles">Los Angeles</option>
  <option value="Chicago">Chicago</option>
  <option value="Houston">Houston</option>
  <option value="Philadelphia">Philadelphia</option>
  <option value="Lahore">Lahore</option>
        {cities.map((cityName, index) => (
          <option key={index} value={cityName}>
            {cityName}
          </option>
        ))}
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
          placeholder="Country ID"
          value={newCity.countryId}
          onChange={(e) => setNewCity({ ...newCity, countryId: Number(e.target.value) })}
          className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
        />
        <button onClick={handleAddCity} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Add City
        </button>
        <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
        onClick={handleUpdateCity}
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
      {error && <div className="text-red-500 mt-3">{error}</div>}
      </div>
      {/* <div className="mt-5">
        <h2>City Data</h2>
        <p>ID: {cityData.id}</p>
        <p>Name (English): {cityData.cityNameEnglish}</p>
        <p>Name (Arabic): {cityData.cityNameArabic}</p>
        <p>Country ID: {cityData.countryId}</p>
      </div> */}
      </div>
        <label className="font-semibold text-sm pb-1 block text-accent-content" onSubmit={handleUserCreation}>
                {/* Password */}
              </label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                {/* Confirm Password */}
              </label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Confirm Password"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={true}
              />
        <label className="font-semibold text-sm pb-1 block text-accent-content">
          {/* Captcha */}
        </label>
        <input
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Enter Captcha"
          value={Captcha}
          onChange={(e) => setCaptcha(e.target.value)}
          required={true}
        />

              <div className="checkboxes">
      <div style={{marginBottom:'1rem'}}>
        <input
          type="checkbox"
          id="accept-terms"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
        />
        <label htmlFor="accept-terms">Accept the <strong style={{color:'rgb(115, 103, 240)',cursor:"pointer"}}>Terms of the policy</strong></label>
      </div>
      <div style={{marginBottom:'2rem'}}>
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
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg> */}
              </button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              {/* <div className="py-5 text-center">
            <Link
              to="/login"
              className="btn btn-neutral text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              Already have an account? Please login.
            </Link>
          </div> */}
          <div className="py-5 text-center" style={{textAlign:'center'}}>
               <p className="btn btn-neutral text-grey" style={{color:'grey'}}>Already have an account? <strong style={{color: 'rgb(115, 103, 240)',
    fontSize: '0.9rem',
    fontFamily: 'sans-serif',cursor:'pointer'}} onClick={handleLoginClick} >Sign in here</strong></p>
          </div>
          <button
        type="button"
        onClick={ handleDelete }
        className="transition duration-200 bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block mt-4"
      >
        <span className="inline-block mr-2">DELETE USER</span>
      </button>
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
  );
}
return (
    <>

    <div className="Contain">
      <div className="TopBtnn">
        <div>
          <button className="LoginBtn" onClick={handleLoginClick}>Login</button>
        </div>
        <div>
          <button className="RegisterBtn" onClick={handleRegisterClick}>Register</button>
        </div>
      </div>
      {showLoginForm && <LoginForm />}
      {showRegisterForm && <RegisterForm />}
    </div>
    </>
  );
}


export default Log;
