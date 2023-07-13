import ItemCatalogo from './ItemCatalogo'
import { useState, useEffect } from 'react'
import './Catalogo.css'

export default function Catalogo(){
const [michis, setMichis] = useState([])

useEffect(() => {
  fetch('https://api.thecatapi.com/v1/images/search?limit=20')
  .then(res => res.json())
  .then(data => setMichis(data))

}, [])
console.log(michis)
  return(
    <main>
    <h1>Michi catálogo</h1>
    <section className='catalogo'>
   {
    michis?.map(michi => <ItemCatalogo id={michi.id} url={michi.url} />
    )
   }
    </section>
    </main>
  )
}