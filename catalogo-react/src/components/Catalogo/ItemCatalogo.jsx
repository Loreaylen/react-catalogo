import './ItemCatalogo.css'

export default function ItemCatalogo({id, url}) {

  return (
    <article key={id} className='itemCatalogo'>
    <div className='contenedorImagen'>
    <img src={url} alt="superMichi" />
    </div>
    </article>
  )
}