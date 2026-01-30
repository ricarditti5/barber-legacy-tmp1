import { useState } from 'react'
import './index.css'
import HeroSec from './Components/HeroSec'

function App() {
  //background img na primeira parte
  const [load, setLoad] = useState(false);
  return (
    <>
      <img 
        src="/barberLogo.svg"
        alt="Barbearia Legacy"
        className='w-50 h-50'
        />
      <HeroSec   />
    </>
  )
}

export default App
