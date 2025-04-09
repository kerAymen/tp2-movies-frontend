import './App.css'
import {useState} from 'react'
import { fetchMovies, fetchSingleMovie } from './services/ApiService'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header'
import Trailer from './components/Trailer'
import Reviews from './pages/Reviews'
import NotFound from './pages/NotFound'


function App() {
  const [movies, setMovies] = useState()
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    const movieData = await fetchMovies()
    setMovies(movieData)
  }

  const getSingleMovie = async (imdbId) => {
    const movieData = await fetchSingleMovie(imdbId)
    setMovie(movieData)
    setReviews(movieData.reviewIds)
  }
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home getMovies={getMovies} movies={movies}/>} />
        <Route path="/trailer/:ytTrailerId" element={<Trailer/>} />
            <Route 
              path="/reviews/:movieId" 
              element ={<Reviews getMovieData={getSingleMovie} movie={movie} reviews={reviews} setReviews={setReviews} />} 
            />
            <Route path="*" element = {<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
