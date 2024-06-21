import React from 'react';
import { FireFilled } from '@ant-design/icons';

export const Logo = () => {
  return (
    <div className='Logo' style={{height:'4rem',textAlign:'center',color:'#fff',paddingTop:'1.3rem',background:'rgb(134, 115, 254)',
        display: 'flex',
    justifyContent: 'center',}}>
    <div className='Logo-icon' style={{display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '1.3rem',
    borderRadius: '50%'}}>
       <span className='admin-Panel' style={{padding: '2px',marginLeft:'2rem',
    textAlign: 'center',
    color: 'rgb(255, 255, 255)'}}>Admin Panel</span>
        <FireFilled style={{marginLeft:'1rem'}} />
    </div>
    </div>
  )
}