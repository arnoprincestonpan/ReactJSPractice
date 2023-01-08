import Navbar from "./components/Navbar";
import Pricing from './pages/Pricing'
import About from './pages/About'
import Home from "./pages/Home";
import {Route, Routes} from 'react-router-dom'

function App() {
  let component
  return (
    <>
      <Navbar />
      <div className = "container">
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/pricing" element={<Pricing  />} />
          <Route path="/about" element={<About  />} />
        </Routes>
      </div>
    </>
  );
}

export default App;