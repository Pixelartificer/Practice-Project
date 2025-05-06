import React from 'react'
import SingleCart from '../SingleCart/SingleCart';

const Placement = ({cart}) => {

    console.log(cart);
    
  return (
    <div>
       <h1 className='text-3xl'> Placement</h1>
       {
        cart.map(singleCart => <SingleCart
        key={singleCart.id}
        singleCart={singleCart}
        >

        </SingleCart>)
       }
    </div>
  )
}

export default Placement