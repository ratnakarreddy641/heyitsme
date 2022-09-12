import React from 'react'
import Logo from '../Main Logo.png'
function Header() {
  return (
    <div className='Header mx-5 my-5'>
      <div className='Title'>
        <h2 >HeyIt's<span>Me</span> . . !</h2>
      </div>
      <div className='Hotlinks'>
          <h4><a href='/'>Home</a></h4>
          <h4><a href='/Grad'>Grad</a></h4>
          <h4><a href='/Portfolio'>Portfolio</a></h4>
      </div>
    </div>
  )
}

export default Header;