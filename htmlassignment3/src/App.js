import './App.css';
import Banner from './components/Banner';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./components/HomePage"
import Layout from './components/Layout'
import HTMLSemantics from "./components/HTMLSemantics"
import CSSSelectors from "./components/CSSSelectors"
import Social from "./components/Social"


function App() {
  return (
    <div className="App">
      <header>
        <Banner />
      </header>
      <body>
        <BrowserRouter>
            <main>
              <Layout />
              <Routes>
                <Route path="/" element={<HomePage  />}  />
                <Route path="/htmlsemantics" element={<HTMLSemantics  />}  />
                <Route path="/cssselectors" element={<CSSSelectors  />}  />
              </Routes>
            </main>
          </BrowserRouter>
      </body>
        <Social />
    </div>
  );
}

export default App;
