// Functional State Update

import { useState } from "react"

const ObjectMethod2 = () => {
  const [student, nextData] = useState({address:"ratta road",city:"Gujranwala"})

  function changeData(){
    nextData(prevData =>({ // prevData => ({...prevData })React passes the previous state into this parameter.
      // Always use () to store an object in an arrow function
      ...prevData,         // copy previous state
      city:"GUJ"         // update only city
    })) 
  }

  return (
    <div className="Mergeclass">
      <h1>{student.address},{student.city}</h1>
      <button  className="id1" onClick={changeData}>Click Method 2</button>
    </div>
  )
}

export default ObjectMethod2

