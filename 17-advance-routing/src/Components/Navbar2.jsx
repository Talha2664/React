// Import useNavigate hook from react-router-dom
// useNavigate is used for programmatic navigation
import { useNavigate } from "react-router-dom"

const Navbar2 = () => {

  // Create navigate function
  const navigate = useNavigate()

  // Go to Home page ("/")
  const returnBtn = () => {
    navigate('/')
  }

  // Go back to previous page (history back)
  const backBtn = () => {
    navigate(-1)
  }

  // Go forward to next page (history forward)
  const nextBtn = () => {
    navigate(1)
  }

  return (
    <div className="NavParent">

      <div className="NavChild">
        {/* Navigate to Home */}
      <button onClick={returnBtn}>
        Return to Home Page
      </button>

      {/* Go back one page */}
      <button onClick={backBtn}>
        Back
      </button>

      {/* Go forward one page */}
      <button onClick={nextBtn}>
        Next
      </button>

      </div>
    </div>
  )
}

export default Navbar2
