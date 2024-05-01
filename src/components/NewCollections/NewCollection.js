import React, { useEffect } from 'react'
import './new.css'
import { useState } from 'react'
import Item from '../Items/Item'
export const NewCollection = () => {

  const [new_collection,setNew_collection]=useState([]);

  useEffect(()=>{
   fetch('https://mern-bookstore-xi.vercel.app/newcollection')
   .then((response)=>response.json())
   .then((data)=>setNew_collection(data));
  },[])
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr/>
        <div className='collections'>
         {new_collection.map((item,i)=>{
              return <Item key={i} id={item.id}name={item.name} author={item.author} genre={item.genre} publiser={item.publisher} language={item.language} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
         })}
        </div>
        </div>
  )
}
