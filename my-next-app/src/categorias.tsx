import { ReactDOM } from "react";
import { ReactElement } from "react";
import Image from "next/image";
import ranking from './img/instagram.png'
import fotos from './img/driver.png'
import eventos from './img/baner.jpeg'
import informações from './img/coqueiros.jpg'
import picos from './img/ondas.png'
import asc from './img/carangueijo.png'




export default function Categorias(){
    return(
        <div id="categoriasdiv1" >
            
            <div id="categoriasdiv2">

                <div className="categorias" id="cate1">
                    <Image src={ranking} alt= "" className="fotocate"/>
                    RANKING
                </div>
                <div className="categorias" id="cate2">
                    <Image src={eventos} alt= "" className="fotocate"/>
                    EVENTOS
                </div>
                <div className="categorias" id="cate3">
                    <Image src={fotos} alt= "" className="fotocate"/>
                    FOTOS</div>

                <div className="categorias" id="cate4">
                    <Image src={asc} alt= "" className="fotocate"/>                    
                    ASC</div>
                <div className="categorias" id="cate5">
                    
                    <Image src={informações} alt= "" className="fotocate"/>
                    
                     INFORMAÇÕES</div>
                <div className="categorias" id="cate6">
                    
                    <Image src={picos} alt= "" className="fotocate"/>
                    PICOS</div>
            </div>
           

        </div>


    )
}