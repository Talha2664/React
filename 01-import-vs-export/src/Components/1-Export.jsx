// Export Components

// Default Export

const Greet = () => {
    let name = "Talha"
  return (
    <div>
        <h1 id="greet">Assalamuaikum {name}</h1>    {/* must use {} to access variable */}
    </div>
  )
}
function Btn2(){
    return(
    <button>Ckick Me!</button>    )
}

export default Greet   // Single default export runs perfectly at a time.
// export default btn2;  => if i need to export this btn using default export 
                          // then eroor occurs so to handle this error we use => named export

// Named Export
export const Sayhello = () => {
  return (
    <div>
        <h1 id="hello">Hello Talha</h1>
    </div>
  )
}

// Now i want to inport in App.jsx File 



//We can export unlimited named exports but Single Named export

// <!--Using default export=>we can only export single component in a file,
// but using named export=> we do multiple -->