import React from 'react'
import './related.css'
import data_product from '../Assests/data'
import Item from '../Items/Item'
export const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>RelatedProducts
        </h1>
        <hr/>
        <div className='relatedproducts-item'>
          {data_product.map((item,i)=>{
             return <Item key={i} id={item.id}name={item.name} author={item.author} genre={item.genre} publiser={item.publisher} language={item.language} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
    </div>
  )
}
