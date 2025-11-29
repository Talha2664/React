import React from 'react'
import Card from './Components/1-card'

const App = () => {
  return (
    <div>                 
       {/* Write { } to store numbers,variables */}
       
      <Card username ="Talha" age = {23}/> {/* This is a Prop attribute and Property */}

      <Card username ="Yasir" age= {24}></Card> 
      {/* That is the use of Prop Same component With different Properties */}

    </div>
  )
}

export default App

{/* same like call a function and add their parameters in it CARD(parameters) */}