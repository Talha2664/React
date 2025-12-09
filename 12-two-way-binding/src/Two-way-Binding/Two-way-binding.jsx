import { useState } from "react";

const Binding = () => {

  // React state: Name = current value, setnewName = function to update value
  const [Name, setnewName] = useState('');

  // This function runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // stops page from refreshing on submit

    console.log("form submitted by", Name); // print the entered name

    setnewName(''); // clear the input after submit
  };

  return (
    <div>
      {/* onSubmit calls handleSubmit when user clicks the button or presses Enter */}
      <form onSubmit={handleSubmit}>
        
        <input
          className="class1"
          type="text"
          placeholder="Enter your name"

          // controlled input: value comes from state
          value={Name}

          // updates the state whenever the user types something
          onChange={(e) => {
            setnewName(e.target.value); // store the typed value in state
          }}
        />

        {/* Button will trigger form submit */}
        <button className="class1">
          Submit!
        </button>

      </form>
    </div>
  );
};

export default Binding;
