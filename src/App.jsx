import { useState } from 'react'
import './styles.css'
import logo from '../public/Images/logo.png'
import photoGrid from '../public/Images/photo-grid.png'

function SubApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <nav>
          <img className='logo' src={logo} alt="skybnb"></img>
          <p>World's favourite travel companion !!</p>
        </nav>
        <div>
          <img className='photo-grid' src={photoGrid} alt='album'></img>
        </div>
        <div className='hero'>
          <h1 className='h1'>Online Experiences</h1>
          <h4>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h4>
        </div>
      </div>
    </>
  )
}

export default SubApp
