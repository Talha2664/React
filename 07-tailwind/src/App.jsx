import React from 'react'
import Section1 from "./Components/Section1"
const App = () => {
  const arr =[{name: "talha"},{name:"yasir"}

]
    return (
    <div className='flex '>
      {arr.map((val) => {
      return <Section1 
      name = {val.name}
      />
      })}
    </div>
  )
}

export default App