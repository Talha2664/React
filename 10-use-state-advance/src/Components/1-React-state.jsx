// React state updates are asynchronous.

import { useState } from "react";

// The UI updates after React finishes the render cycle
// But your console.log runs immediately, before React updates the state
// So your UI changes, but the console.log shows the old value.

// Example 

const Reactstate = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
    setCount(count + 1);
    console.log(count); // Shows old value
    };
  return (
    <div className="Mergeclass">
      <button className="id1" onClick={handleClick}>Count me {count}</button>
    </div>
  )
}

export default Reactstate


// UI shows new value, but console shows old value.