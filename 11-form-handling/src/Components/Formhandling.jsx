const DoNothingForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    // nothing else happens
    console.log("form submitted");
    
  };

  return (
    <form onSubmit={(e)=>{
        handleSubmit(e)
        console.log(e);
        
    }}>
      <input type="text" placeholder="Type something..." />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DoNothingForm;