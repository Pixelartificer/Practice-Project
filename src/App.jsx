import React, { useState } from 'react'
import DataUseState from './Component/DataUseState'
import DataUseEffect from './Component/SingleUserData/DataUseEffect'
import DataFatch from './Component/SingleUserData/DataFatch'
import LandDetails from './Component/SingleUserData/LandDetails'
import Products from './Component/Products/Products'
import Placement from './Component/Placement/Placement'




const App = () => {

  const [cart, setCart] = useState([])

const addToCart = (placement)=>{
  const newPlacement = [...cart, placement];
  setCart(newPlacement);
}

  return (
    <div>
      <DataUseState />
      <DataUseEffect />  
      <DataFatch /> 
      <LandDetails />
      <Products addToCart = {addToCart}></Products>
      <Placement cart = {cart}></Placement>
      
    </div>
  )
}

export default App