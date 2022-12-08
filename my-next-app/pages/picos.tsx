import React from "react";
import Image from "next/image";
import Nave from "../src/nav";
import Example from '../src/buttom.jsx'
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
                        <div>
                            <Image src={costa} alt= "" className={spicos.fotocate}/>
                        </div>
                        <p>COSTA</p>

                        
                       


















                    </div>
                    
                    <div className={spicos.praias} id={spicos.atalaia}>
                        <div><Image src={costa} alt= "" className={spicos.fotocate}/></div>
                        <p>ATALAIA</p>
                        
                        <button>
                            -V-
                        </button>
                    </div>
                    <div className={spicos.praias} id={spicos.parquinho}>
                        <div><Image src={costa} alt= "" className={spicos.fotocate}/></div>
                        <p>PARQUINHO</p>
                        
                        <button>
                            -V-
                        </button>
                    </div>

                    <div className={spicos.praias} id={spicos.forte}>
                        <div><Image src={costa} alt= "" className={spicos.fotocate}/> </div>                   
                        <p>PRAIA DO FORTE</p>
                        
                        <button>
                            -V-
                        </button>
                        </div>
                       
                        

            </div>
</div>











        </div>







    )
 }