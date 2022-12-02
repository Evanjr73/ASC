import Image from "next/image"
import img from "./img/ondas.png"
import acss from '../styles/apre.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Card } from 'reactstrap';
import { CardImg , CardBody, CardTitle, CardText,  } from 'reactstrap';


export default function Apre(){
    return(

        <div id={acss.aprediv1}>



            <Image src={img} alt= "" id={acss.apredivimg}/>

            
                


        </div>
    )
}
