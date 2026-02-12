import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './Recommendation.css';

function Recommendation({ movies = [], onSelectMovie, loading }) {
    return (
        <section className="recomm">
            <div className="container-xl">
                <div className="recomm-header">
                    <h2>Recomendações</h2>
                </div>

                <div className="recomm-carousel">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={6} // número padrão de slides
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            992: { slidesPerView: 5 }
                        }}
                    >
                        {movies.slice(0, 20).map(movie => (
                            <SwiperSlide key={movie.id}>
                                <div
                                    className="item"
                                    onClick={() => !loading && onSelectMovie(movie.id)} // evita clicar enquanto carrega
                                >
                                    <img
                                        src={
                                            movie.poster_path
                                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                                : '/fallback-poster.jpg'
                                        }
                                        alt={movie.title || 'Poster'}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '8px'
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Recommendation;
