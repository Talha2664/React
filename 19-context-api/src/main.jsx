// Import createRoot to render the React app (React 18+)
import { createRoot } from 'react-dom/client'

// Import global CSS file
import './index.css'

// Import main App component
import App from './App.jsx'

// Import ThemeContext Provider component
import ThemeContext from './Context/ThemeContext.jsx'

// Create root and render the React application
createRoot(document.getElementById('root')).render(
  // ThemeContext is wrapping App
  // This makes theme data available to all components inside App
  <ThemeContext>
    <App />
  </ThemeContext>
)
