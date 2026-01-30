import { useState } from 'react'
import './index.css'
import header from './Components/header'
import HeroSec from './Components/HeroSec'
import about from './Components/about'
import CTA from './Components/CTA'
import depoitments from './Components/depoitments'
import about from './Components/about'
import footer from './Components/footer'


function App() {
  //background img na primeira parte
  const [load, setLoad] = useState(false);
  return (
    <>
      
      <HeroSec   />
    </>
  )
}

export default App
