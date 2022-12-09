import React from 'react';
import '../pages/styles/Homepage.css'
const HomePage = () => {
  return (
    <>
    <p className='eventdashboard'>
      Event Dashboard
    </p>
    <div className='container1'>
    <p className='username'>
    Username:
    </p>
    <input type={'email'} className='email' placeholder='sntc@iitbhu' />
    <p className='credential'>
Password:
</p>
<input type={'password'} className='password' placeholder='SNTC IITBHU' />
<button className='loginbutton'>
    Log In
</button>
    </div>
    </>
  )
}

export default HomePage
