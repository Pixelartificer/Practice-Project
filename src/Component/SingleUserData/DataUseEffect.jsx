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
 <div className='min-h-screen flex items-center justify-center bg-gray-100'>
     <div className='w-[90%] text-center grid grid-cols-3 gap-5'>
        <h1>Hello World: {allData.length}</h1>
       {
        allData.map(singleData => <SingleUserData 
            key={singleData.id}
        singleData = {singleData}
        ></SingleUserData>)
       }
    </div>
 </div>
    
  )
}

export default DataUseEffect