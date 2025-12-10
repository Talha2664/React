// In Axios Automatic parsing mean no need to convert to Json Format

import React, { useState } from 'react'
import axios from 'axios'

const AxiosAPI = () => {
    // State to store the array of images/authors
    const [Data, setData] = useState([])

    // Function to fetch data from API
    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list') // Axios GET request
        const result = response.data // store the response data (array of objects)
        console.log(result) // log the full data in console
        setData(result) // save the data in state
    }

    return (
        <div>
            {/* Button to trigger API call */}
            <button onClick={getData}>Get Axios Data!</button>

            {/* Loop through the array and display each item's id and author */}
            {Data.map(val => (
                <h1 key={val.id}>
                    {val.id}, {val.author} {/* display id and author */}
                </h1>
            ))}
        </div>
    )
}

export default AxiosAPI
