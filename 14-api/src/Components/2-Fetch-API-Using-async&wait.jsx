// In Fetch we must manually do response.json()

import { useState } from "react"

const FetchAsync$wait = () => {

  // state to store post
  const [Post, setPost] = useState(null)

  const getData = async () => {
    // fetch data
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    
    // convert to json
    const data = await response.json()

    console.log(data[0]) // show first post in console

    setPost(data[0]) // save first post in state
  }

  return (
    <div>
      {/* button to get data */}
      <button onClick={getData}>Get Async&wait Data!</button>

      {/* show post body if Post is not null */}
      <h1>{Post?.body}</h1>
    </div>
  )
}

export default FetchAsync$wait
