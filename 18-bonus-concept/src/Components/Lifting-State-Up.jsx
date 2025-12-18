import React from 'react'

const LiftingStateUp = ({name,changename}) => {
  function nameChange(){
    changename("Talha")
  }
  return (
    <div>
        <h1>The Name of student is {name}</h1>
        <button onClick={nameChange}>Change Name!</button>
    </div>
  )
}

export default LiftingStateUp
