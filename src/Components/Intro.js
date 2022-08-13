import React from 'react'
import Wave from '../hello.png'

function Intro() {
  return (
    <div className='IntroSpace'>
        <div className='IntroText'>
            <img src={Wave}/>
            <h2>Hey It's Me, Ratnakar Reddy</h2>
            <p>Associate Software Engineer</p>
            <p>Accenture India</p>
        </div>
       
    </div>
  )
}

export default Intro;