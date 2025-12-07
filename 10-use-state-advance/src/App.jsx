import Reactstate from "./Components/1-React-state"
import ObjectMethod1 from "./Components/2-Change-State-using-object-method1"
import ObjectMethod2 from "./Components/3-Change-State-using-object-method2"
import BatchExample from "./Components/4-Non-Batched-vs-Batched-states"

const App = () => {
  return (
    <div className="parent">
      <Reactstate />
      <ObjectMethod1 />
      <ObjectMethod2 />
      <BatchExample />
    </div>
  )
}

export default App