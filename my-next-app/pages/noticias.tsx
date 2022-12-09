import React from "react";
import Nave from "../src/nav";
import Noticia from "../src/noticia";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'reactstrap';
import { CardImg , CardBody, CardTitle, CardText,  } from 'reactstrap';
import Examp from "../src/butomhoocks/use";





export default function Noticias(){
    return(
        
        
        <div>
            <Nave></Nave>


            <div className="bodyy">
                <div className="separa"></div>
                
                <Noticia></Noticia>
                

            </div>

           

            



        </div>
        
    )
}