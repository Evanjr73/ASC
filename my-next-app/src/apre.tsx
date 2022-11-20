import { ReactDOM } from "react"
import { ReactElement } from "react"
import Image from "next/image"
import img from "./img/ondas.png"
import acss from '../styles/apre.module.css'




export default function Apre(){
    return(

        <div id={acss.aprediv1}>



            <Image src={img} alt= "" id={acss.apredivimg}/>




        </div>
    )
}