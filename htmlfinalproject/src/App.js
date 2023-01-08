import './App.css';
import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home';
import Navigation from './components//Navigation';
import Banner from './pages/Banner';
import Restaurants from './pages/Restaurants';
import CookingAtHome from './pages/CookingAtHome';
import ContactMe from './pages/ContactMe';
import AboutMe from './pages/AboutMe';
import LoremIpsum from './pages/LoremIpsum';
import Gallery from './pages/Gallery';
import Footer from './pages/Footer'

function App() {
  return (
      <div className="App">
        <header>
          <Banner />
        </header>
        <body>
          <BrowserRouter>
            <main>
              <Navigation />
              <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="/restaurants" element={<Restaurants  />} />
                <Route path="/cookingathome" element={<CookingAtHome  />} />
                <Route path="/contact" element={<ContactMe  />} />
                <Route path="/aboutme" element={<AboutMe  />} />
                <Route path="/loremipsum" element={<LoremIpsum  />} />
                <Route path="/gallery" element={<Gallery  />} />
              </Routes>
            </main>
          </BrowserRouter>
        </body>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}

export default App;
