import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import Recommendation from '../main components/recommendation/Recommendation'
import Midia from '../main components/midia/Midia'
import './Main.css'

function Main(props) {

    const {
        movie,
        director,
        config,
        cast,
        reviews,
        videos,
        posters,
        backgrounds,
        recommendations,
        setMovieId,
        writers,
    } = props;


    if (!movie || !director) {
        return <div>Carregando...</div>;
    }

    console.log(reviews);

    // Função para transformar o idioma original do filme
    function transformLanguage(original_language) {
        const LanguageMap = {
            "en": "Inglês",
            "pt": "Português",
            "es": "Espanhol",
        }
        return LanguageMap[original_language] || original_language;
    }

    // Função para transformar o status do filme
    function transformStatus(status) {
        const StatusMap = {
            "Released": "Lançado",
        }
        return StatusMap[status] || status;
    }

    function getImageUrl(path) {
        const baseUrl = "https://image.tmdb.org/t/p/";
        const size = "original";
        return `${baseUrl}${size}${path}`;
    }

    function formatCurrency(value) {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(value);
    }

    console.log(cast, "Elenco");

    /* Função para rendeziar os cards do Elenco */ 
    function handleCast() {

        if (!cast || cast.length === 0) {
            return (
                <div className="empty-state">
                    <p>Elenco não disponível</p>
                </div>
            );
        }

        return cast.map(member => (
            <SwiperSlide key={member.id}>
                <div className="item">
                    <img
                        src={getImageUrl(member.profile_path)}
                        alt={member.name}
                    />
                    <div className="item__container">
                        <h3>{member.name}</h3>
                        <p>{member.character}</p>
                    </div>
                </div>
            </SwiperSlide>
        ));
    }

    /* Função para renderizar os cards das Reviews */
    function handleReview() {

        if (!reviews || reviews.length === 0) {
            return (
                <div className="empty-state">
                    <p>Nenhuma resenha disponível</p>
                </div>
            );
        }

        return reviews.map(review => (
            <SwiperSlide key={review.id}>
                <div className="reviews__item">
                    <article className="review-card">
                        <p className="review-card__content">
                            {review.content}
                        </p>

                        <p className="review-card__author">
                            por <strong>{review.author}</strong>
                        </p>

                        <div className="review-card__footer">
                            <p>
                                {review.created_at
                                    ? new Date(review.created_at).toLocaleDateString("pt-BR")
                                    : "Data não informada"}
                            </p>

                            <p>
                                Nota: <strong>{review.author_details?.rating ?? "—"}</strong>/10
                            </p>
                        </div>
                    </article>
                </div>
            </SwiperSlide>
        ));
    }

    return (
        <main>
            {/* SEÇÃO DE INTRODUÇÃO */}
            <section className="container-xl main__intro">
                {/* Banner do Filme Barbie */}
                <div className="main__banner">
                    <img src={getImageUrl(movie.poster_path)} alt="Logo do Filme da barbie"/>
                </div>
                <div className="main__content">
                    <div className="main__film-info">
                        <h2>
                            {movie.title} <span>({movie.release_date?.split('-')[0]})</span>
                        </h2>
                        <div className="main__section">
                            <h3>Gênero:</h3>
                            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
                        </div>
                        <div className="main__sinopse">
                            <h3>Sinopse:</h3>

                            {movie.overview && movie.overview.trim().length > 0 ? (
                                <p>{movie.overview}</p>
                            ) : (
                                <p className="text-muted">Sinopse não disponível.</p>
                            )}
                        </div>
                    </div>
                    <div className="main__additional-info">
                        <div className="row gx-0 justify-content-between main__details">
                            <div className="col ps-0">
                                <div>
                                    <h3>Dirigido por:</h3>
                                    <p>{director.name}</p>
                                </div>
                                <div>
                                    <h3>Situação:</h3>
                                    <p>{transformStatus(movie.status)}</p>
                                </div>
                                <div>
                                    <h3>Orçamento:</h3>
                                    <p>{movie?.budget > 0 ? formatCurrency(movie.budget):"Orçamento não informado"}</p>
                                </div>
                            </div>
                            <div className="col ps-0">
                                <div>
                                    <h3>Escrito por:</h3>
                                    <p>
                                        {writers.length > 0
                                            ? writers.map(writer => writer.name).join(", ")
                                            : "Roteiro não informado"}
                                    </p>
                                </div>
                                <div>
                                    <h3>Idioma original:</h3>
                                    <p>{transformLanguage(movie.original_language)}</p>
                                </div>
                                <div>
                                    <h3>Receita:</h3>
                                    <p>{movie?.revenue > 0? formatCurrency(movie.revenue): "Receita não informada"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO DE ELENCO */}
            <section className="main__cast">
                <div className="container-xl main__cast-content">
                    <div className="cast__header mb-3">
                        <h2 className="cast__title fw-bold mb-0">Elenco</h2>
                        <a href="#" className="button__link">Ver mais</a>
                    </div>

                    <div className="cast__carousel">
                        <Swiper
                            className="cast-swiper"
                            spaceBetween={10}
                            slidesPerView={6}
                            centeredSlides={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                320: {  slidesPerView: 1.2},
                                576: { slidesPerView: 2 },
                                768: { slidesPerView: 4 },
                                992: { slidesPerView: 6 }
                            }}
                        >

                        {/* Função para renderizar os cards do Elenco*/}    
                        {handleCast()}

                        </Swiper>
                    </div>
                </div>
            </section>

            {/* SEÇÃO DE RESENHAS */}
            <section className="reviews">
                <div className="container-xl">
                    <div className="reviews__content">
                        
                        <div className="reviews__header">
                            <h2 className="reviews__title fw-bold mb-0">Resenhas</h2>
                            <a href="#" className="button__link">Ver mais</a>
                        </div>

                        <div className="reviews__grid">
                            <Swiper
                                className="review-swiper"
                                spaceBetween={20}
                                slidesPerView={1}
                                direction="horizontal"
                                breakpoints={{
                                    576: {
                                        slidesPerView: 1
                                    },
                                    768: {
                                        slidesPerView: 2
                                    },
                                    1200: {
                                        slidesPerView: 2
                                    }
                                }}
                            >
                                {handleReview()}
                            </Swiper>
                        </div>

                    </div>
                </div>
            </section>

            <Midia videos={videos} posters={posters} backgrounds={backgrounds}/>
            <Recommendation
                movies={recommendations}
                setMovieId={setMovieId}
                 // 🔹 Passando as recomendações como props
                // onSelectMovie={onSelectMovie} 
                // loading={loading}
            />
        </main>
    );
}

export default Main