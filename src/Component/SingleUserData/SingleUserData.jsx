import React from 'react'


const SingleUserData = ({singleData}) => {
const {name, phone, website, company} = singleData;

  
  return (
    <div className='border-2 border-red-500 p-4 bg-zinc-400 rounded-[8px]'>
      <h1 className='text-[36px]'>Name: {name}</h1>
      <h1 className='text-[24px]'>Phone: {phone}</h1>
      <h1>Website: {website}</h1>
      <h1>Company: {company.catchPhrase}</h1>
    </div>
  )
}

export default SingleUserData