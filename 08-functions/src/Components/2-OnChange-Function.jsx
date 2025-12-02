// When you want to pass a value or a custom parameter to your function,
// you must create another function inside onChange.

const Mycomponent = () => {
    function showName(name) {
        console.log(name);
        
    }
  return (
    <div>
        <input onChange={(elem)=>{
            showName(elem.target.value)
        }} 
        type="text" placeholder="Enter your Name" />
    </div>
  )
}

export default Mycomponent;