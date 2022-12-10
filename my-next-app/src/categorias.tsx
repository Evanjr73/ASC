import Image from "next/image";
import ranking from './img/instagram.png'
import fotos from './img/driver.png'
import eventos from './img/baner.jpeg'
import informações from './img/coqueiros.jpg'
import picos from './img/ondas.png'
import asc from './img/carangueijo.png'
import cate from '../styles/categorias.module.css'
import Link from "next/link";


export default function Categorias(){
    return(
        <div id={cate.categoriasdiv1} >
            
            <div id={cate.categoriasdiv2}>  

                <div className={cate.categorias} id={cate.cate1}>
                    <Link href="../pages/ranking">
                        <Image src={ranking} alt= "" className={cate.fotocate}/>
                    <p>RANKING</p></Link>
                </div>
                <div className={cate.categorias} id={cate.cate2}>

                    <Link href="">
                        <Image src={eventos} alt= "" className={cate.fotocate}/>
                        <p>EVENTOS</p>
                    </Link>
                    
                </div>
                <div className={cate.categorias} id={cate.cate3}>
                    <Link href="">
                        <Image src={fotos} alt= "" className={cate.fotocate}/>
                        <p>FOTOS</p>
                        
                        </Link> </div>

                <div className={cate.categorias} id={cate.cate4}>
                    <Link href="">
                        <Image src={asc} alt= "" className={cate.fotocate}/>                    
                        <p>ASC</p>
                    </Link>
                    </div>
                <div className={cate.categorias} id={cate.cate5}>
                    <Link href="">
                        <Image src={informações} alt= "" className={cate.fotocate}/>
                        
                        <p>INFORMAÇÕES</p>
                    </Link>
                    </div>
                <div className={cate.categorias} id={cate.cate6}>
                    
                    <Link href="/picos">
                        <Image src={picos} alt= "" className={cate.fotocate}/>
                        <p> PICOS</p>
                    </Link>
                    
                </div>
            </div>
           

        </div>


    )
}
