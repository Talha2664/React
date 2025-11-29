import React from 'react'
import Greet ,{Sayhello}from './Components/1-Export'

const App = () => {
  return (
    <div>
      <Greet />
      <Sayhello />
    </div>
  )
}

export default App