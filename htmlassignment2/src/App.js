import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import HomePage from './components/HomePage';
import FavouriteArtistsAndSongs from './components/FavouriteArtistsAndSongs';
import FavouriteMovies from './components/FavouriteMovies';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/favoriteartistsandsongs" element={<FavouriteArtistsAndSongs  />}/>
          <Route path="/favouritemovies" element={<FavouriteMovies  />} />
        </Routes>
      </main>
    </BrowserRouter>
  );


}

export default App;
