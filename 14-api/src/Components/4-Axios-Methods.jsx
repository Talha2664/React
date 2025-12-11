// Axios – GET
// Data fetch karna

axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res.data);
  });

// Axios – POST
// New data add karna

axios.post("https://jsonplaceholder.typicode.com/users", {
    name: "Talha",
    city: "Gujranwala"
})
.then((res) => {
    console.log(res.data);
});

// Axios – PATCH
// Partial update — sirf ek field change hogi

axios.patch("https://jsonplaceholder.typicode.com/users/1", {
    city: "Lahore"
})
.then((res) => {
    console.log(res.data);
});

// Axios – DELETE
// Data delete karna

axios.delete("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log("Deleted!", res.data);
  });