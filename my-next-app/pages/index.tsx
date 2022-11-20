import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nave from '../src/nav'
import Apre from '../src/apre'
import Categorias from '../src/categorias'
import Footer from '../src/footer'

export default function Home() {
  return (
    <div id='div1' >
      <Nave></Nave>
      <div id='div2'>
        <Apre></Apre>
        <Categorias></Categorias>
       
      </div>
      <Footer></Footer>
    </div>
  )
}

