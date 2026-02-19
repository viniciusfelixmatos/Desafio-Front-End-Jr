import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import 'swiper/css'

import './Recommendation.css'

function Recommendation({ movies, setMovieId }) {

    // Função para criar os cards de recomendações
    function handleRecommendations() {
            if (!movies || movies.length === 0) return null;

            return movies.map(movie => (
                <SwiperSlide key={movie.id} onClick={changeFilm(movie)}>
                    <div className="item-recomm">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                </SwiperSlide>
            ))
    }

    // Função para alterar o id do Filme carregado
    const changeFilm = (movie) => () => {
        // Lógica para atualizar o filme selecionado
        console.log(movie.id, 'SIUUUUUUUUUUU') // TODO
        setMovieId(movie.id); // Atualiza o estado com o ID do filme selecionado
    }

    return (
        <section className="recomm">
            <div className="container-xl">
                <div className="recomm-header">
                    <h2>Recomendações</h2>
                </div>

                <div className="recomm-carousel">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            992: { slidesPerView: 5 }
                        }}
                    >
                        {handleRecommendations()}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Recommendation