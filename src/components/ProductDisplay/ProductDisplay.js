import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'
export const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
     <div className='productdisplay-left'>
<div className='productdisplay-imglist'>
<img src={product.image} alt=""/>
<img src={product.image} alt=""/>
<img src={product.image} alt=""/>
<img src={product.image} alt=""/>
</div>
<div className='productdisplay-img'>
    <img className='productdisplay-main-img' src={product.image} alt=''/>
</div>
     </div>
     <div className='productdisplay-right'>
      <h1>{product.name}</h1>
      <div className='productdisplay-right-star'>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_dull_icon}alt=''/>
        <p>(122)</p>
      </div>
      <div className='productdisplay-right-prices'>
        <div className='productdisplay-right-price-old'>
            ${product.old_price}
        </div>
        <div className='productdisplay-right-price-new'>
            ${product.new_price}
        </div>
      </div>
      <div className='productdisplay-right-description'>
      Our bookstore takes great care in packaging your books for delivery, ensuring they reach you in excellent condition. Each book is meticulously wrapped and protected to preserve its quality during transit. 
      </div>
      <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
     <p className='productdisplay-right-category'><span>Category:</span>Novels,Fictional,Non-Fictional</p>
     <p className='productdisplay-right-category'><span>Tags:</span>Latest,Most Selling,More Rated</p>

     </div>
    
    </div>
  )
}
