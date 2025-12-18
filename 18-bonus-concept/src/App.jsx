import { useState } from 'react'
import LiftingStateUp from './Components/Lifting-State-Up'

const App = () => {
  const [Name, setName] = useState("Mughal")
  return (
    <div>
      <LiftingStateUp name={Name} changename={setName} />
    </div>
  )
}

export default App