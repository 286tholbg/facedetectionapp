import React from 'react'
import Tilt from 'react-parallax-tilt'
import './logo.css'
import brain from './brain.png'

const Logo = () => {
  return (
    <div className='ma4 mt0'>
        <Tilt style={{ height: '100px', width: '100px', backgroundColor: 'darkgreen' }} options={{max: 55}} className="Tilt br3 shadow-2">
            <div className='Tilt-inner pa3'>
                <img src={brain} style={{paddingTop: '5px'}} alt="logo"/>
            </div>
        </Tilt>
    </div>
  )
}

export default Logo