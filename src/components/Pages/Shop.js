import React from 'react'
import { Hero } from '../Hero/Hero'
import { Popular } from '../Popular/Popular'
import { Offers } from '../Offer/Offers'
import { NewCollection } from '../NewCollections/NewCollection'
import { NewsLette } from '../NewsLetter/NewsLette'
export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLette/>
    </div>
  )
}
