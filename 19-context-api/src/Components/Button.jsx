// Import useContext hook to access React context
import { useContext } from "react";

// Import the ThemeDataContext created in ThemeContext.jsx
import { ThemeDataContext } from "../Context/ThemeContext";

const Button = () => {
  // useContext hook allows us to access context values
  // Here we destructure 'theme' and 'toggleTheme' from the context
  const { theme, toggleTheme } = useContext(ThemeDataContext);

  return (
    <div>
      {/* Display the current theme value */}
      <h1>Current Theme: {theme}</h1>

      {/* Button to toggle the theme by calling the function from context */}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Export the Button component so it can be used in other parts of the app
export default Button;

