import React from 'react'
import DataUseState from './Component/DataUseState'
import DataUseEffect from './Component/SingleUserData/DataUseEffect'
import DataFatch from './Component/SingleUserData/DataFatch'
import LandDetails from './Component/SingleUserData/LandDetails'




const App = () => {
  return (
    <div>
      <DataUseState />
      <DataUseEffect />  
      <DataFatch /> 
      <LandDetails />
      
    </div>
  )
}

export default App