import Image from "next/image"
import image from './img/carangueijo.png'
import instagram from './img/instagram.png'
import navestyle from '../styles/nave.module.css'
import Example from "./butomhoocks/buttom"


export default function Nave(){
    return(
        <div id={navestyle.navdiv1}>
           <Image src={image} alt= "" className={navestyle.carangueijo}/>
            
            <div className={navestyle.inputandbuton}>
                <a href="https://www.instagram.com/canes_storm73/" target="_blank" rel="noreferrer"> <Image src={instagram} alt='' className={navestyle.instagram}></Image></a>
                <button id={navestyle.doistraços}>=</button>
               
            
            </div>
            
  
        </div>
    )
  }
 