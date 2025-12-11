import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    // State variable "Num" with initial value 0
    // setNum is used to update Num
    const [Num, setNum] = useState(0)

    // Function that increments Num by 1 whenever the button is clicked
    const getNum = () => {
      setNum(Num + 1)
    }

    // useEffect will run automatically whenever "Num" changes
    // Because "Num" is inside the dependency array [Num]
    useEffect(() => {
      console.log("Number Changed")
    }, [Num])  // This effect runs only when Num updates

  return (
    <div>
        <h1>UseEffect</h1>

        {/* Displaying the current number */}
        <h1>{Num}</h1>

        {/* Clicking this button calls getNum() which increases Num */}
        <button onClick={getNum}>Click me!</button>
    </div>
  )
}

export default UseEffect
