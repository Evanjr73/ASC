import { ReactDOM } from "react";
import { ReactElement } from "react";
import Image from "next/image";
import ranking from './img/instagram.png'
import fotos from './img/driver.png'
import eventos from './img/baner.jpeg'
import informações from './img/coqueiros.jpg'
import picos from './img/ondas.png'
import asc from './img/carangueijo.png'
import cate from '../styles/categorias.module.css'



export default function Categorias(){
    return(
        <div id={cate.categoriasdiv1} >
            
            <div id={cate.categoriasdiv2}>  

                <div className={cate.categorias} id={cate.cate1}>
                    <Image src={ranking} alt= "" className="fotocate"/>
                    <p>RANKING</p>
                </div>
                <div className={cate.categorias} id={cate.cate2}>
                    <Image src={eventos} alt= "" className="fotocate"/>
                    <p>EVENTOS</p>
                </div>
                <div className={cate.categorias} id={cate.cate3}>
                    <Image src={fotos} alt= "" className="fotocate"/>
                    <p>FOTOS</p></div>

                <div className={cate.categorias} id={cate.cate4}>
                    <Image src={asc} alt= "" className="fotocate"/>                    
                    <p>ASC</p></div>
                <div className={cate.categorias} id={cate.cate5}>
                    
                    <Image src={informações} alt= "" className="fotocate"/>
                    
                     <p>INFORMAÇÕES</p></div>
                <div className={cate.categorias} id={cate.cate6}>
                    
                    <Image src={picos} alt= "" className="fotocate"/>
                    PICOS
                    
                </div>
            </div>
           

        </div>


    )
}