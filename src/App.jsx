import React from 'react'
import DataUseState from './Component/DataUseState'
import DataUseEffect from './Component/SingleUserData/DataUseEffect'
import DataFatch from './Component/SingleUserData/DataFatch'




const App = () => {
  return (
    <div>
      <DataUseState />
      <DataUseEffect />  
      <DataFatch /> 
      
    </div>
  )
}

export default App