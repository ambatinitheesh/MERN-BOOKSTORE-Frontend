import React, { useEffect, useState } from 'react'
import './popular.css'

import Item from '../Items/Item'

export const Popular = () => {
  const[famous,setfamous]=useState([]);
  useEffect(()=>{
      fetch('http://localhost:4000/famous')
      .then((response)=>response.json())
      .then((data)=>setfamous(data))
  },[])
   
  return (
    <div className='popular'>
        <h1>FAMOUS Non-Fictional BOOKS</h1>
        <hr />
        <div className='popular-item'>
            {famous.map((item,i)=>{
                 return <Item key={i} id={item.id}name={item.name} author={item.author} genre={item.genre} publiser={item.publisher} language={item.language} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
export default Popular
