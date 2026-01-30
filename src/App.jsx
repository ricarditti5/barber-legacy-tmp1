import { useState } from 'react'
import './index.css'
import Header from './Components/Header'
import HeroSec from './Components/HeroSec'
import About from './Components/About'
import CTA from './Components/CTA'
import Depoitments from './Components/Depoitments'
import About from './Components/About'
import Footer from './Components/Footer'


function App() {
  //background img na primeira parte
  const [load, setLoad] = useState(false);
  if(load === true){
    setLoad(true);
    return (
      <>
        <Header />
        <HeroSec />
        <CTA />
        <About />
        <Depoitments />
        <Footer />
      </>
    )
  }
  else{
    return(
      <>
        <p>Erro 401! Reinicie a Página</p>
      </>
    )
  }
}

export default App