// Import useParams hook from react-router-dom
// useParams is used to read dynamic values from the URL
import { useParams } from "react-router-dom"

const DepartmentDetail = () => {

  // Extract the dynamic parameter from the URL
  // If URL is: /Department/mens
  // then category = "mens"
  const { category } = useParams()

  return (
    <div>
      {/* Display the dynamic category value on the page */}
      <h1>{category} Department Detail</h1>
    </div>
  )
}

export default DepartmentDetail
