const FetchThen = () => {

  const getData = () => {

    // Step 1: Fetch API call
    fetch("https://jsonplaceholder.typicode.com/users")

      // Step 2: First .then → we receive the raw response
      .then((response) => {

        // Step 3: Convert response to JSON (this ALSO returns a Promise)
        response.json()

          // Step 4: Second .then → now we get the actual JSON data
          .then((data) => {
            console.log(data); // Step 5: Display data in console
          });

      });

  };

  return (
    <div>
      {/* Button triggers the getData function */}
      <button onClick={getData}>Get .then Data!</button>
    </div>
  );
};

export default FetchThen;
