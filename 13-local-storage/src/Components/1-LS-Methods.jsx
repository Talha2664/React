// Store data in local Storage of Browser


const LSMethods = () => {
// Store Data
localStorage.setItem("name", "Talha");
// Get Data
const name = localStorage.getItem("name");
console.log(name);
// Remove Data
localStorage.removeItem("name");
// Clear All
localStorage.clear();

  return (
    <div>
    </div>
  )
}

export default LSMethods