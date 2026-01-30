import {useState} from 'react'
import './index.css'
import barberLogo from '../public/barberLogo.svg'
/*<h2>Tradição, estilo e precisão em cada corte.</h2>
      <h3>Na Barbearia Legacy, combinamos técnica clássica com estilo moderno. Cortes personalizados, barba bem desenhada e atendimento profissional num ambiente pensado para homens que sabem o que querem.</h3>
      CONTEUDO PARA COLOCAR NA DESCRIÇÃO DA LANDING PAGE */
export default function HeroSec(props){
    props.name = 2;
    return(
        <>
         <img 
        src={barberLogo}
        className='w-50 h-50'
        />
        <ul>
            <li>
                <h1>Barbearia Legacy</h1>
            </li>
            <li>
                Início
            </li>
            <li>
                Serviços
            </li>
            <li>
                Sobre
            </li>
            <li>
                Galeria de Cortes
            </li>
            <li>
                Provas Sociais
            </li>
        </ul>
        </>
    );
}