import React from 'react'


const SingleUserData = ({singleData}) => {
const {name, phone, website, company} = singleData;

  
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Phone: {phone}</h1>
      <h1>Website: {website}</h1>
      <h1>Company: {company.catchPhrase}</h1>
    </div>
  )
}

export default SingleUserData