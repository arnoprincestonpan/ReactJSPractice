import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Aboutme from "./pages/Aboutme"
import Interests from './pages/Interests'
import Education from "./pages/Education"
import Programming from "./pages/Programming"
import Hobbies from "./pages/Hobbies"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <div className = "container">
        <Routes>
          <Route path="/" element={<Home  />}  />
          <Route path="/aboutme" element={<Aboutme  />}  />
          <Route path="/education" element={<Education />}  />
          <Route path="/interests" element={<Interests />}  />
          <Route path="/programming" element={<Programming />}  />
          <Route path="/hobbies" element={<Hobbies  />}  />
        </Routes>
        <Navbar />
      </div>
    </>
  );
}

export default App;
