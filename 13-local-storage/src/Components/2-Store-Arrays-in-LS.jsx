
const Array = () => {

  // A normal JavaScript array
  const arr = [10, 20, 30, 40, 50];

  // localStorage only stores STRING data
  // So we convert array → string using JSON.stringify
  localStorage.setItem("Array", JSON.stringify(arr));

  return (
    <div>
      {/* Nothing to show here, but localStorage me save ho chuka hai */}
    </div>
  )
}

export default Array
