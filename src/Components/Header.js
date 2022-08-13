import React from 'react'
import Logo from '../Main Logo.png'
function Header() {
  return (
    <div className='Header'>
      <div className='Title'>
        <img className='Logo' src={Logo} />
        <h2 >HeyIt'sMe . . !</h2>
      </div>
      <div className='Hotlinks'>
          <h4>Home</h4>
          <h4>Grad</h4>
          <h4>Portfolio</h4>
          <h4>Contact</h4>
      </div>
    </div>
  )
}

export default Header