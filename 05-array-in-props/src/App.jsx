import ArrayProp from "./Components/Array-in-Props"

const App = () => {
  const arr = ["talha","yasir","rana"]
  return (
    <div id="parent">
      <ArrayProp username = {arr[0]} />
      <ArrayProp username = {arr[1]} />
      <ArrayProp username = {arr[2]} /> {/* But here is a problem we can data manually
                                            to avoid this we use array methods
                                                                              */}
    </div>
  )
}

export default App