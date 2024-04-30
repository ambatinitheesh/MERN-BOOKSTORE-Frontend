import React, { useContext } from 'react'
import '../CSS/shopcat.css'
import { ShopContext } from '../Context/ShopContext'
import drop from '../Assests/dropdown_icon.png'
import Item from '../Items/Item'
export const ShopCategory = (props) => {
const {all_product}=useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src ={props.banner} alt=""/>
      <div className='shop-category-indexsort'>
        <p>
          <span>Showing 1-12</span> out of 16 products
        </p>
      <div className='shopcategory-sort'>
        Sort by <img src={drop} alt=""/>
      </div>
      </div>
      <div className='shop-category-products'>
        {all_product.map((item,i)=>{
             if(props.category==item.category){
      return <Item key={i} id={item.id}name={item.name} author={item.author} genre={item.genre} publiser={item.publisher} language={item.language} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
             }
             else{
              return null;
             }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
      </div>
  )
}
