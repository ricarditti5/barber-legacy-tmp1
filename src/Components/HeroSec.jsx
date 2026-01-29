import {useState} from 'react'
import './index.css'

export default function HeroSec(props){
    props.name = 2;
    return(
        <>
            <p>Hello {props.name}</p>
        </>
    );
}