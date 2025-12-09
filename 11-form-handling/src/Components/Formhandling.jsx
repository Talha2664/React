const DoNothingForm = () => {

  // This function runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();           // Stop the page from refreshing
    console.log("form submitted"); // Just print a message (no real action)
  };

  return (
    // On form submit, call handleSubmit directly
    <form onSubmit={handleSubmit}>
      
      {/* Text input field */}
      <input type="text" placeholder="Type something..." />
      
      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DoNothingForm;
