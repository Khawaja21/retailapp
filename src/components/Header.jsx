import React from 'react';
import {BellOutlined} from '@ant-design/icons';
import { MenuUnfoldOutlined , MenuFoldOutlined } from '@ant-design/icons';
import profileImage from './assets/1.jpg';
import Flag1Image from './assets/saa.png';
import Flag2Image from './assets/usa.png';
export default function Header() {
  // document.addEventListener("DOMContentLoaded", () => {
  //   const dropdownToggle = document.getElementById("dropdownToggle");
  //   const dropdownMenu = document.getElementById("dropdownMenu");
  
  //   dropdownToggle.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
  //   });
  
  //   document.addEventListener("click", (event) => {
  //     if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
  //       dropdownMenu.style.display = "none";
  //     }
  //   });
  // });

  return (
<>

<Header style={{ backgroundColor: 'rgb(134, 115, 254)', color: '#fff' }}>
<nav id="navbar-main" className="navbar is-fixed-top">
    <Button type="text"
      className="toggle"
      onClick={()=> setCollapsed(!collapsed)}   
       icon={ collapsed ? 
      <MenuUnfoldOutlined /> : 
      <MenuFoldOutlined />}
      />
  <div className="navbar-brand">
    <span className="Brand">Admin Panel</span>
  </div>
  <div className="navbar-brand is-right">
    <a className="navbar-item --jb-navbar-menu-toggle" data-target="navbar-menu" href='/'>
      <span className="icon"><i className="mdi mdi-dots-vertical mdi-24px"></i></span>
    </a>
  </div>
  <div className="navbar-menu" id="navbar-menu">
    <div className="navbar-end">
      <div className="navbar-item dropdown has-divider has-user-avatar">
        <a className="navbar-link" href='/'>
          <div className="user-avatar">
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-50" style={{ fontSize: '0.2rem', display: 'flex', flexDirection: 'row', marginRight: '0.1rem' }}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <div className="is-user-name">
            <span style={{ color: '#fff',fontSize:'1rem' }}>Language</span>
          </div>
        </a>
        <div className="navbar-dropdown" style={{top:'4.7rem',width:'9rem'}}>
          <a href="/" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '1.4rem', textDecoration: 'none', color: '#fff', backgroundColor: 'rgb(134, 115, 254)', padding: '0.5rem' }}>
            <img style={{ maxWidth: '40px', maxHeight: '40px' }} src={Flag2Image} alt="English Flag" className="mr-2" />English
          </a>
          <a href="/" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '1.4rem', textDecoration: 'none', color: '#fff', backgroundColor: 'rgb(134, 115, 254)', padding: '0.5rem' }}>
            <img alt="English Flag" style={{ maxWidth: '40px', maxHeight: '40px' }} src={Flag1Image} className="mr-2" />العربية
          </a>
          <hr className="navbar-divider" />
        </div>
      </div>
      <div className="navbar-item dropdown has-divider has-user-avatar">
        {/* <a className="navbar-link">
          <div className="user-avatar"></div>
          <BellOutlined  style={{color:'#fff',fontSize:'1.6rem'}}/>
          <div className="is-user-name"><span style={{ color: '#fff' }}><strong style={{ fontWeight: '500'
          ,visibility:'hidden'
           }}>Notifications</strong></span></div>
        </a> */}
        <BellOutlined style={{color:'#fff',fontSize:'1.6rem'}}/>
        <div className="user-avatar">
          </div>
        <div className="navbar-dropdown" style={{top:'3.5rem',width:'9rem'}}>
          <a href="/" className="navbar-item">
            <span className="icon" style={{ color: 'rgb(134, 115, 254)' }}><i className="mdi mdi-logout"></i></span>
            <span style={{ color: '#fff' }}>Log Out</span>
          </a>
          <a href="/" className="navbar-item">
            <span className="icon" style={{ color: 'rgb(134, 115, 254)' }}><i className="mdi mdi-account"></i></span>
            <span style={{ color: '#fff' }}>Profile</span>
          </a>
          <hr className="navbar-divider" />
        </div>
      </div>
      <div className="navbar-item dropdown has-divider has-user-avatar">
        <a className="navbar-link" href='/'>
          <div className="user-avatar">
            <img src={profileImage} alt="Demo RFID" className="rounded-full" />
          </div>
          {/* <div className="is-user-name" style={{ visibility: 'hidden' }}><span>Demo RFID</span></div> */}
        </a>
        <div className="navbar-dropdown" style={{width:'9rem'}}>
          <a className="navbar-item">
            <span className="icon" style={{ color: 'rgb(134, 115, 254)' }}><i className="mdi mdi-logout"></i></span>
            <span style={{ color: '#fff' }}>Log Out</span>
          </a>
          <a href="profile.html" className="navbar-item">
            <span className="icon" style={{ color: '#625F6E' }}><i className="mdi mdi-account"></i></span>
            <span style={{ color: '#fff' }}>Profile</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</Header>
</>
  )
}
