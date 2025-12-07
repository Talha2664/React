import { useState } from "react";

const BatchExample = () => {
  const [count, setCount] = useState(0);

  const handleClickWrong = () => {
    //  This will NOT work as expected
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // Even though we wrote +1 three times, count increases by 1 only
  };

  const handleClickRight = () => {
    //  Functional updates work correctly with batching
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    // count increases by 3
  };

  return (
    <div className="Mergeclass">
      <h1>Count: {count}</h1>
      <div id="id2">
        <button className="id1" onClick={handleClickRight}>Correct Update</button>
        <button className="id1" onClick={handleClickWrong}>Wrong Update</button>
      </div>
    </div>
  );
};

export default BatchExample;