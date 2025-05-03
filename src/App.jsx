import React, { useEffect, useState } from 'react'
import SingleUserData from './Component/SingleUserData/SingleUserData'
import DataEffect from './Component/DataEffect'

const App = () => {

  const [allData, setAllDate] = useState([])

 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => setAllDate(data))
 },[])


  return (
    <div className='text-center'> 

   
      {
        allData.map(singleData => <SingleUserData 
          key={singleData.id}
        singleData= {singleData}
        ></SingleUserData>)
      
      }
      <button type="button" className=" text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
      <DataEffect />
    </div>

    
    
  )
}

export default App