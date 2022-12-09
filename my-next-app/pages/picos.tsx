import React from "react";
import Image from "next/image";
import Nave from "../src/nav";
import costa from '../src/img/costa.jpg'
import spicos from '../styles/picos.module.css'
import Examp from "../src/butomhoocks/use";
import Examp3 from "../src/butomhoocks/use2";
import Examp2 from "../src/butomhoocks/unse1"

import Examp4 from "../src/butomhoocks/use3"

 export default function Picos(){
    
    return(
        
        <div id="picos1">

            <Nave></Nave>
            
            
            <div className={spicos.bodyy}>
                <div className={spicos.separa}></div>

             
        
            

                <div id={spicos.categoriasdiv2}>

                    <div className={spicos.praias} id={spicos.costa}>
                        <div>
                            <Image src={costa} alt= "" className={spicos.fotocate}/>
                        </div>
                       
                        <p>COSTA</p>
                        
                        <Examp></Examp>
                    
                        
                    </div>
                    
                    <div className={spicos.praias} id={spicos.atalaia}>
                        <div><Image src={costa} alt= "" className={spicos.fotocate}/></div>
                        <p>ATALAIA</p>
                        
                        <Examp2></Examp2>
                    </div>
                    <div className={spicos.praias} id={spicos.parquinho}>
                        <div><Image src={costa} alt= "" className={spicos.fotocate}/></div>
                        <p>PARQUINHO</p>
                        
                        <Examp3></Examp3>
                    </div>

                    <div className={spicos.praias} id={spicos.forte}>
                        <div><Image src={costa} alt= "" className={spicos.fotocate}/> </div>                   
                        <p>PRAIA DO FORTE</p>
                        
                        <Examp4></Examp4>
                        </div>
                       
                        

            </div>
</div>











        </div>







    )
 }