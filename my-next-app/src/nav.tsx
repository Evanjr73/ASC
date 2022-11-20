import { ReactDOM } from "react"
import { ReactElement } from "react"

import Image from "next/image"
import image from './img/carangueijo.png'
import instagram from './img/instagram.png'
// import navstyles from '../styles/nav.scss'
import Styles from '../styles/nave.module.css'

import navestyle from '../styles/nave.module.css'


export default function Nave(){
    return(
        <div id={navestyle.navdiv1}>
           <Image src={image} alt= "" className={navestyle.carangueijo}/>
            
            <div className={navestyle.inputandbuton}>
                <a href=""> <Image src={instagram} alt='' className={navestyle.instagram}></Image></a>
                <button id={navestyle.doistraços}>=</button>
            
            </div>
            
  
        </div>
    )
  }
 