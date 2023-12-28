import { Route, Routes } from "react-router-dom"; // Import components for routing
import { Login, Signup } from "./pages";        // Import Login and Signup components
import Home from "./pages/Home";               // Import Home component

function App() {
  return (
    <div className="App">
      <Routes>                                  // Root element for defining routes
        <Route path="/" element={<Home />} />      // Route for the homepage (path "/")
        <Route path="/login" element={<Login />} /> // Route for the login page (path "/login")
        <Route path="/signup" element={<Signup />} /> // Route for the signup page (path "/signup")
      </Routes>
    </div>
  );
}

export default App;                           // Export the App component as the default
