
const Card = (props) => {
  return (
    <div id="parent">
        <div className="card">
            <h1>My name is {props.username}</h1>
            <h2>My age is {props.age}</h2>
        </div>
    </div>
  )
}

export default Card