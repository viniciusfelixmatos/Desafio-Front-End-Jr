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
  /* POSTERS DOS FILMES */
  const [posters, setPosters] = useState([]);
  /* POSTERS DOS FILMES / BACKDROPS */
  const [backgrounds, setBackgrounds] = useState([]);

  /* ID DO FILME */
  const [movieId, setMovieId] = useState(346698);

  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  function handleSelectMovie(id) {
    setLoading(true);   // dispara loading
    setMovieId(id);     // muda o ID do filme → useEffect vai buscar novos dados
  }

  useEffect(() => {
    async function fetchMovieData() {
      try {
        /* Dados do Filme */ 
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
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
          `https://api.themoviedb.org/3/configuration`,
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
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
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
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          {
            headers: {
              Authorization: `Bearer ${Token}`
            },
            params: {
              language: 'pt-BR'
            }
          }
        )

        /* Dados dos posters do Filme */
        const postersResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/images`,
          {
            headers: {
              Authorization: `Bearer ${Token}`
            }
          }
        );

        /* Dados dos crditos do Filme */
        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            headers: {
              Authorization: `Bearer ${Token}`
            }
          }
        );

        const recommendationsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
          {
            headers: { Authorization: `Bearer ${Token}` },
            params: { language: 'pt-BR' }
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
        setPosters(postersResponse.data.posters);
        setBackgrounds(postersResponse.data.backdrops);
        setRecommendations(recommendationsResponse.data.results);

        console.log(movieResponse.data);
        console.log(postersResponse.data.posters, 'CARREGOU OS POSTERS');
        console.log(movieResponse);
        console.log(directorData);
        console.log(creditsResponse);
        console.log(reviewResponse);
        console.log(videosResponse);

        console.log(movieId)

      } catch (error) {
        console.error(error);
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    fetchMovieData();
  }, [movieId])


  return (
    <>
      <Header />
      <Main 
      movie={Movie} 
      director={director} config={config} cast={cast} reviews={reviews} videos={videos} posters={posters} 
      backgrounds={backgrounds} 
      onSelectMovie={handleSelectMovie} 
      recommendations={recommendations}
      loading={loading}
      setMovieId={setMovieId}/>
      <Footer />
    </>
  );
}

export default App
