import React from 'react'

const FetchAsync$wait = () => {
    const getData = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data);
        
    }
  return (
    <div>
        <button onClick={getData}>Get Data 2!</button>
    </div>
  )
}

export default FetchAsync$wait