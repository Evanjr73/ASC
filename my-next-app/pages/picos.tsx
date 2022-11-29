import React from "react";
import Image from "next/image";
import Nave from "../src/nav";

import costa from '../src/img/costa.jpg'

import spicos from '../styles/picos.module.css'





 export default function Picos(){
    return(


        <div id="picos1">

            <Nave></Nave>
            
            
            <div className={spicos.bodyy}>
                <div className={spicos.separa}></div>

             
        
            

                <div id={spicos.categoriasdiv2}>

                    <div className={spicos.praias} id={spicos.costa}>
                                <Image src={costa} alt= "" className={spicos.fotocate}/>
                        <p>COSTA</p>
                    </div>
                    <div className={spicos.praias} id={spicos.atalaia}>
                        <Image src={costa} alt= "" className={spicos.fotocate}/>
                        <p>ATALAIA</p>
                    </div>
                    <div className={spicos.praias} id={spicos.parquinho}>
                        <Image src={costa} alt= "" className={spicos.fotocate}/>
                        <p>PARQUINHO</p>
                    </div>

                    <div className={spicos.praias} id={spicos.forte}>
                        <Image src={costa} alt= "" className={spicos.fotocate}/>                    
                        <p>PRAIA DO FORTE</p></div>
                       
                        

            </div>
</div>











        </div>







    )
 }