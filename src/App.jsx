import { useState } from 'react'
import './index.css'
import barberLogo from '../public/barberLogo.svg'
import HeroSec from './Components/HeroSec'

function App() {
  //background img na primeira parte
  const [load, setLoad] = useState(false);
  return (
    <>
      <h1>Barbearia Legacy</h1>
      <img 
      src={barberLogo}
      className='w-50 h-50'
      />
      <h2>Tradição, estilo e precisão em cada corte.</h2>
      <h3>Na Barbearia Legacy, combinamos técnica clássica com estilo moderno. Cortes personalizados, barba bem desenhada e atendimento profissional num ambiente pensado para homens que sabem o que querem.</h3>
      <HeroSec   />
    </>
  )
}

export default App
