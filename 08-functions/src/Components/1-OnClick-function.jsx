// Simple make a function and pass it into onclick function

const Function = () => {
    const handleClick = () => {
        console.log("button clicked");       
    }
  return (
    <div className='section1'>
        <button onClick={handleClick}>Click me!</button>
        {/* handleClick is a normal JavaScript function which pas in onclick event */}
    </div>
  )
}

export default Function