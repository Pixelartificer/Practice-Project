
import React, { useState } from 'react'

const DataEffect = () => {

  const [value, setValue] = useState(0);


const IncriseHandelar = ()=>{
  const newPrice = value + 1;
  setValue(newPrice)
}

const decriceHandelar = ()=>{
  const newPrice = value - 1;
  setValue(newPrice);
}


  return (
    <div>
      <h1>Price: {value}</h1>
      <button onClick={IncriseHandelar}>Incrise</button>
      <button onClick={decriceHandelar}>Decrise</button>
    </div>
  )
}

export default DataEffect