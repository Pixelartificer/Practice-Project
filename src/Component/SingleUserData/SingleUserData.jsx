import React from 'react'

const SingleUserData = ({singleData}) => {
const {name, website, phone, company} = singleData;

  return (
    <div>
        <h1>{name}</h1>
        <h2>{phone}</h2>
        <p>{website}</p>
        <p>Company name: {company.name}</p>
        <span>{company.catchPhase}</span>
    </div>
  )
}

export default SingleUserData