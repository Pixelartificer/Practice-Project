import React, { useEffect, useState } from 'react'
import SingleUserData from './SingleUserData';

const DataUseEffect = () => {

const [allData, setAllData] = useState([]);

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setAllData(data))
}, [])
  return (
    <div>
        <h1>Hello World: {allData.length}</h1>
       {
        allData.map(singleData => <SingleUserData 
            key={singleData.id}
        singleData = {singleData}
        ></SingleUserData>)
       }
    </div>
    
  )
}

export default DataUseEffect