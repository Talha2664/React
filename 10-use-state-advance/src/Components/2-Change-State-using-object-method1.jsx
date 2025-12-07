// Immutable State Update using the Spread Operator (...)

import { useState } from "react"

// Change State using Objects
const ObjectMethod1 = () => {
    const [studentData, nextData] = useState({name:"Talha",age:22})
    const changeData = ()=>{
        const newStudentData = {...studentData}  // copy old data
        newStudentData.age = 23                  // Update age
        newStudentData.name = "TALHA"            // update name
        nextData(newStudentData)

    }
  return (
    <div className="Mergeclass">
        <h1>{studentData.name},{studentData.age}</h1>
        <button className="id1" onClick={changeData}>Change Data</button>
    </div>
  )
}

export default ObjectMethod1

// In this method if object becomes big, manually updating each value becomes messy.