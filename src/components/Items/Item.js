import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'
export const Item = (props) => {
  return (
    <div className='item'>
       
       <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=""/></Link> 
        <p>{props.name}</p>
        <p>{props.author}</p>
        <p>{props.genre}</p>
        <p>{props.publisher}</p>
        <p>{props.language}</p>
           <div className='item-prices'>
            <div className='item-price-new'>
                  Rs.{props.new_price}
            </div>
            <div className='item-price-old'>
                  Rs.{props.old_price}
</div>

           </div>
    </div>
  )
}

export default Item
