import './App.css';
import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Restaurants from './components/Restaurants';
import CookingAtHome from './components/CookingAtHome';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import LoremIpsum from './components/LoremIpsum';
import Gallery from './components/Gallery';
import Footer from './components/Footer'

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
