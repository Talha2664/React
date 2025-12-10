import FetchThen from "./Components/1-Fetch-API-using-then"
import FetchAsync$wait from "./Components/2-Fetch-API-Using-async&wait"
import AxiosAPI from "./Components/3-Axios-API"

const App = () => {
  return (
    <div>
      <FetchThen />
      <FetchAsync$wait />
      <AxiosAPI />
    </div>
  )
}

export default App