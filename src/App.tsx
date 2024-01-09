
// import { useEffect, useState } from 'react';
import './App.css'
import Product from './components/product/product'
import DarModeButton from './components/ui/darModeButton';
import { productList } from './data';
import { IProduct } from './interfaces/inde';

function App() {
  const products = productList
  return (
    <main className=' dark:bg-slate-950 container mx-auto relative '>
      <DarModeButton/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols:4 gap-2 md:gap-4'>
      {
        products ?
        products.map((product : IProduct)=>(
        <Product key={product.id} 
        product={product} />))
        :'not founded' 
      }
    </div>
    </main>

  )
}

export default App
