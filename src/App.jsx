import { useState } from 'react'
import './index.css'
import HeroSec from './Components/HeroSec'

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
