import { ReactDOM } from "react";
import { ReactElement } from "react";
import Image from "next/image";
import asc from './img/asc1.png'

export default function Categorias(){
    return(
        <div id="categoriasdiv1" >
            
            <div id="categoriasdiv2">

                <div className="categorias" id="cate1">
                    
                    RANKING
                </div>
                <div className="categorias" id="cate2">EVENTOS</div>
                <div className="categorias" id="cate3">FOTOS</div>
                <div className="categorias" id="cate4">ASC</div>
                <div className="categorias" id="cate5"> INFORMAÇÕES</div>
                <div className="categorias" id="cate6">PICOS</div>
            </div>


        </div>


    )
}