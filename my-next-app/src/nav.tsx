import { ReactDOM } from "react"
import { ReactElement } from "react"
import Image from "next/image"
import image from './img/carangueijo.png'
import instagram from './img/instagram.png'
// import navstyles from '../styles/nav.scss'
import Styles from '../styles/nave.module.css'




export default function Nave(){
    return(
        <div id="navdiv1">
           <Image src={image} alt= "" className="carangueijo"/>
            
            <div className="inputandbuton">
                <a href=""> <Image src={instagram} alt='' className="instagram"></Image></a>
                <button id="doistraços">=</button>
            
            </div>
            

        </div>
    )
}

 