import React from 'react'

const SingleFakeDate = ({singleData}) => {

    const {name, age } = singleData


  return (
    <div className='text-center mt-5'>
<h1>Name: {name}</h1>
<p>age: {age}</p>
    </div>
  )
}

export default SingleFakeDate