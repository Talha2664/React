import React from 'react'

const Section1 = (props) => {
  return (
    <>
        <div className="color bg-black h-100 w-60 text-amber-300 my-5 mx-5 px-10 py-10 rounded-4xl flex content-center" >
                        <h1 className='text-4xl' >{props.name}</h1>
        </div>
    </>
  )
}

export default Section1