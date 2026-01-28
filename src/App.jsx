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
  const [config, setConfig] = useState(null);

  useEffect(() => {
    async function fetchMovieData() {
      try {
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

        setMovie(movieResponse.data);
        setDirector(directorData || "Não informado");
        setConfig(configResponse.data);
        console.log(movieResponse.data);
        console.log(directorData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovieData();
  }, [])

  return (
    <>
      <Header />
      <Main movie={Movie} director={director} config={config} />
      <Footer />
    </>
  );
}

export default App
