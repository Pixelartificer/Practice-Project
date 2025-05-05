import React, { useEffect, useState } from 'react'
import SingleFakeDate from './SingleFakeDate'

const DataFatch = () => {

    const [fakeData, setFakeData] = useState([])


    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setFakeData(data))
    },[])


  return (
    <div>
        <h1 className='text-[36px]'>Data Length: {fakeData.length}</h1>
        {
            fakeData.map(singleData => <SingleFakeDate 
            key = {singleData.id}
            singleData = {singleData}
            >

            </SingleFakeDate>)
        }
    </div>
  )
}

export default DataFatch