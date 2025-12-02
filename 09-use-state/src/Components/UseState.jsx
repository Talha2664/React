import React, { useState } from "react";
const UseState = () => {
    const [num, setNum] = useState(0)
        function increaseNum(){
        setNum(num + 1)
    };
    function decreaseNum(){
        if(num === 0){
            return
        }
        else{
            setNum(num - 1)
        }
    };
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={increaseNum}>increase</button>
        <button onClick={decreaseNum}>decrease</button>
    </div>
  )
}

export default UseState