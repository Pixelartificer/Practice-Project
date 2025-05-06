import React from 'react'

const SingleCart = ({singleCart}) => {
    const {  name,
        brand,
        description,
        imageUrl,
        price,
        quantity,
        category,
        inStock,
        addedAt} = singleCart;
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default SingleCart