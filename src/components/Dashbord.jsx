import { useState } from 'react';
import { Layout, Button , theme, Flex } from 'antd';
import { MenuUnfoldOutlined , MenuFoldOutlined } from '@ant-design/icons';
import React from 'react';
import MenuList from './MenuList';
import { Logo } from './Logo';
// import ToggleThemeButton from './ToggleThemeButton';
import {BellOutlined} from '@ant-design/icons';
import profileImage from '../assets/1.jpg';
import Flag1Image from '../assets/saa.png';
import Flag2Image from '../assets/usa.png';
import Footer from './Footer';
import StuCard from './StuCard';
import { Link } from 'react-router-dom';
// import { TbBackground } from 'react-icons/tb';
const { 
  Header , Sider , Content} = Layout;

  const languageData = {
    en: {
      adminPanel: "Admin Panel",
      language: "Language",
      english: "English",
      arabic: "العربية",
      logOut: "Log Out",
      profile: "Profile",
    },
    ar: {
      adminPanel: "لوحة التحكم",
      language: "اللغة",
      english: "English",
      arabic: "العربية",
      logOut: "تسجيل الخروج",
      profile: "الملف الشخصي",
    },
  };

function  Dashbord () {

  // const [darkTheme, setDarkTheme] = useState(true);
  const [showText, setShowText] = useState(true);
  const toggleTextVisibility = () => {
    setShowText(!showText);
  };
  const [collapsed, setCollapsed] = useState(false);
  const [language, setLanguage] = useState('en');

  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [notificationsDropdownOpen, setNotificationsDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };


  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
    setNotificationsDropdownOpen(false);
    setProfileDropdownOpen(false);
  };

  const toggleNotificationsDropdown = () => {
    setNotificationsDropdownOpen(!notificationsDropdownOpen);
    setLanguageDropdownOpen(false);
    setProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    setLanguageDropdownOpen(false);
    setNotificationsDropdownOpen(false);
  };
  // const toggleTheme = () =>{
  //   setDarkTheme(!darkTheme);
  //   //  setCollapsed(!collapsed);
  // };
  const {
    token: { colorBgContainer },
  } =theme.useToken();
  return (

      <>
      <Flex gap="middle" wrap >
        <Layout style={{minHeight:'100vh'}}>
          <Sider collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          //  collapsible
          //  trigger={null}
             className='SideBar'>
             <Logo />
            <MenuList />
             {/* <ToggleThemeButton darkTheme={darkTheme}
             toggleTheme={toggleTheme} /> */}
          </Sider>
          <Layout>
            <Header style={{ backgroundColor: 'rgb(134, 115, 254)', color: '#fff' }}>
        <nav id="navbar-main" className="navbar is-fixed-top">
            <Button type="text"
              className="toggle"
              onClickCapture={toggleTextVisibility}
              onClick={()=> setCollapsed(!collapsed)}   
               icon={ collapsed ? 
              <MenuUnfoldOutlined /> : 
              <MenuFoldOutlined />}
              />
          <div className="navbar-brand">
            <span className="Brand">{languageData[language].adminPanel}</span>
          </div>
          <div className="navbar-brand is-right">
            <Link className="navbar-item --jb-navbar-menu-toggle" data-target="navbar-menu">
              <span className="icon"><i className="mdi mdi-dots-vertical mdi-24px"></i></span>
            </Link>
          </div>
          <div className="navbar-menu" id="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item dropdown has-divider has-user-avatar">
                <Link className="navbar-link" onClick={toggleLanguageDropdown}>
                  <div className="user-avatar">
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-50" style={{ fontSize: '0.2rem', display: 'flex', flexDirection: 'row', marginRight: '0.1rem' }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <div className="is-user-name">
                    <span style={{ color: '#fff',fontSize:'1rem' }}>{languageData[language].language}</span>
                  </div>
                </Link>
                {languageDropdownOpen && (
                      <div className="navbar-dropdown" style={{ top: '3.2rem', width: '9rem' }}>
                        <Link
                          href="#"
                          className="dropdown-item"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.4rem',
                            textDecoration: 'none',
                            color: '#fff',
                            backgroundColor: 'rgb(134, 115, 254)',
                            padding: '0.5rem',
                          }}
                          onClick={() => toggleLanguage('en')}
                        >
                          <img
                            style={{ maxWidth: '40px', maxHeight: '40px' }}
                            src={Flag2Image}
                            alt="English Flag"
                            className="mr-2"
                          />
                          {languageData[language].english}
                        </Link>
                        <Link
                          href="#"
                          className="dropdown-item"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.4rem',
                            textDecoration: 'none',
                            color: '#fff',
                            backgroundColor: 'rgb(134, 115, 254)',
                            padding: '0.5rem',
                          }}
                          onClick={() => toggleLanguage('ar')}
                        >
                          <img
                            style={{ maxWidth: '40px', maxHeight: '40px' }}
                            src={Flag1Image}
                            className="mr-2"  
                            alt=''
                          />
                          {languageData[language].arabic}
                          {/* العربية */}
                        </Link>
                        <hr className="navbar-divider" />
                      </div>
                    )}
              </div>
              <div className="navbar-item dropdown has-divider has-user-avatar">
                {/* <a className="navbar-link">
                  <div className="user-avatar"></div>
                  <BellOutlined  style={{color:'#fff',fontSize:'1.6rem'}}/>
                  <div className="is-user-name"><span style={{ color: '#fff' }}><strong style={{ fontWeight: '500'
                  ,visibility:'hidden'
                   }}>Notifications</strong></span></div>
                </a> */}
                <BellOutlined onClick={toggleNotificationsDropdown} style={{color:'#fff',fontSize:'1.6rem', cursor:'pointer'}}/>
                {notificationsDropdownOpen && (
                      <div className="navbar-dropdown" style={{ top: '7.4rem', width: '9rem', position:"relative"}}>
                        <Link className="navbar-item">
                          <span className="icon" style={{ color: 'rgb(134, 115, 254)' }}>
                            <i className="mdi mdi-logout"></i>
                          </span>
                          <span style={{ color: '#fff' }}>{languageData[language].logOut}</span>
                        </Link>
                        <Link href="#" className="navbar-item">
                          <span className="icon" style={{ color: 'rgb(134, 115, 254)' }}>
                            <i className="mdi mdi-account"></i>
                          </span>
                          <span style={{ color: '#fff' }}>{languageData[language].profile}</span>
                        </Link>
                        <hr className="navbar-divider" />
                      </div>
                    )}
              </div>
              <div className="navbar-item dropdown has-divider has-user-avatar">
                <Link className="navbar-link" onClick={toggleProfileDropdown}>
                  <div className="user-avatar">
                    <img src={profileImage} alt="Demo RFID" className="rounded-full" />
                  </div>
                  {/* <div className="is-user-name" style={{ visibility: 'hidden' }}><span>Demo RFID</span></div> */}
                </Link>
                {profileDropdownOpen && (
                      <div className="navbar-dropdown" style={{ width: '9rem' }}>
                        <Link className="navbar-item">
                          <span className="icon" style={{ color: 'rgb(134, 115, 254)' }}>
                            <i className="mdi mdi-logout"></i>
                          </span>
                          <span style={{ color: '#fff' }}>{languageData[language].logOut}</span>
                        </Link>
                        <Link href="profile.html" className="navbar-item">
                          <span className="icon" style={{ color: '#625F6E' }}>
                            <i className="mdi mdi-account"></i>
                          </span>
                          <span style={{ color: '#fff' }}>{languageData[language].profile}</span>
                        </Link>
                      </div>
                    )}
              </div>
            </div>
          </div>
        </nav>
      </Header>
        <Content style={{margin:'16px'}}>
            <StuCard style={{ padding:'14px',minHeight:'360px' }} ></StuCard>
        </Content>
            <Footer></Footer>
          </Layout>
           
        </Layout>

      </Flex>
      
      </>
  )
}
export default Dashbord;