import { useState, useEffect } from 'react'
import Header from "./components/header/header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import './App.css'
import './index.css'

import axios from 'axios';

function App() {

  const URL = 'https://api.themoviedb.org/3/movie/346698'
  const Token = import.meta.env.VITE_TMDB_TOKEN

  const [Movie, setMovie] = useState(null);
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState([]);
  const [config, setConfig] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        /* Dados do Filme */ 
        const movieResponse = await axios.get(
          'https://api.themoviedb.org/3/movie/346698',
          {
            headers: {
              Authorization: `Bearer ${Token}`
            },
            params: {
              language: 'pt-BR'
            }
          }
        );

        /* Dados ?? */ 
        const configResponse = await axios.get (
          'https://api.themoviedb.org/3/configuration',
          {
            headers: {
              Authorization: `Bearer ${Token}`
            },
            params: {
              language: 'pt-BR'
            }
          }
        );

        /* Dados das reviews do Filme */
        const reviewResponse = await axios.get(
          'https://api.themoviedb.org/3/movie/346698/reviews',
          {
            headers: {
              Authorization: `Bearer ${Token}`
            },
            params: {
              language: 'pt-BR'
            }
          }
        )

        /* Dados dos videos do Filme */
        const videosResponse = await axios.get(
          'https://api.themoviedb.org/3/movie/346698/videos',
          {
            headers: {
              Authorization: `Bearer ${Token}`
            },
            params: {
              language: 'pt-BR'
            }
          }
        )

        /* Dados dos crditos do Filme */
        const creditsResponse = await axios.get(
          'https://api.themoviedb.org/3/movie/346698/credits',
          {
            headers: {
              Authorization: `Bearer ${Token}`
            }
          }
        );

        const directorData = creditsResponse.data.crew.find(
          person => person.job === 'Director'
        );

        // Pegando os 5 primeiros atores do Elenco
        const castData = creditsResponse.data.cast.slice(0, 15);
        setCast(castData);

        setMovie(movieResponse.data);
        setDirector(directorData || "Não informado");
        setConfig(configResponse.data);
        setReviews(reviewResponse.data.results);
        setVideos(videosResponse.data.results);

        console.log(movieResponse.data);
        console.log(movieResponse);
        console.log(directorData);
        console.log(creditsResponse);
        console.log(reviewResponse);
        console.log(videosResponse);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovieData();
  }, [])

  return (
    <>
      <Header />
      <Main movie={Movie} director={director} config={config} cast={cast} reviews={reviews} videos={videos}/>
      <Footer />
    </>
  );
}

export default App
