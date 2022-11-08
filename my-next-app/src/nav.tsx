import { ReactDOM } from "react"
import { ReactElement } from "react"
import Image from "next/image"
import image from './img/carangueijo.png'
// import navstyles from '../styles/nav.scss'




export default function Nave(){
    return(
        <div id="navdiv1">
           <Image src={image} alt= ""/>
            
            <div className="inputandbuton">
                <input type="---------" />
                <button>🔍</button>
            </div>

            <button id="doistraços">=</button>

        </div>
    )
}

 