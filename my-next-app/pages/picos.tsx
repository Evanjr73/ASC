import React from "react";
import { ReactDOM } from "react";
import Image from "next/image";
import Nave from "../src/nav";

import costa from '../src/img/costa.jpg'







 export default function Picos(){
    return(


        <div id="picos1">

            <Nave></Nave>
            
            
            <div className="bodyy">
                <div className="separa"></div>

             
        
            

                <div id="categoriasdiv2">

                    <div className="categorias" id="cate1">
                                <Image src={costa} alt= "" className="fotocate"/>
                        <p>RANKING</p>
                    </div>
                    <div className="categorias" id="cate2">
                        <Image src={costa} alt= "" className="fotocate"/>
                        <p>EVENTOS</p>
                    </div>
                    <div className="categorias" id="cate3">
                        <Image src={costa} alt= "" className="fotocate"/>
                        <p>FOTOS</p>
                    </div>

                    <div className="categorias" id="cate4">
                        <Image src={costa} alt= "" className="fotocate"/>                    
                        <p>ASC</p></div>
                        <div className="categorias" id="cate5">
                                
                            <Image src={costa} alt= "" className="fotocate"/>
                                
                            <p>INFORMAÇÕES</p></div>
                        <div className="categorias" id="cate6">
                                
                            <Image src={costa} alt= "" className="fotocate"/>
                                PICOS
                                
                </div>

            </div>
</div>











        </div>







    )
 }