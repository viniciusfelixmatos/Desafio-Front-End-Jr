import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, Mousewheel, Zoom  } from "swiper/modules";

import { useEffect, useState } from "react";

import 'swiper/css'
import "swiper/css/zoom";

import './Midia.css'

function Midia({videos, posters, backgrounds}) {


    console.log(posters, "POSTERS");
    console.log(videos, "Camara")
    console.log(backgrounds, "BACKDROPS")

    {/*CAMARAO*/ }
    console.log(videos.key, "CAMARAO");

    function handleVideos() {

        if (!videos || videos.length === 0) {
            return (
                <div className="empty-state">
                    <p>Vídeos não disponíveis</p>
                </div>
            );
        }

        const youtubeVideos = videos.filter(video => video.site === "YouTube");

        if (youtubeVideos.length === 0) {
            return (
                <div className="empty-state">
                    <p>Vídeos não disponíveis</p>
                </div>
            );
        }

        return youtubeVideos.map(video => (
            <SwiperSlide key={video.id || video.key}>
                <div className="item-midia">
                    <iframe
                        width="400"
                        height="225"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title={video.name}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </SwiperSlide>
        ));
    }

    {/* Função para criar Os posters*/}
    function handlePosters() {

        if (!posters || posters.length === 0) {
            return (
                <div className="empty-state">
                    <p>Posters não disponíveis</p>
                </div>
            );
        }

        return posters
            .slice(0, 8)
            .map((poster, index) => (
                <SwiperSlide key={poster.file_path || index}>
                    <div className="item-poster">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${poster.file_path}`}
                            alt="Poster do filme"
                            loading="lazy"
                        />
                    </div>
                </SwiperSlide>
            ));
    }

    const [activeImage, setActiveImage] = useState(null);

    function handleBackgrounds() {
        if (!backgrounds || backgrounds.length === 0) return null;

        return backgrounds.slice(0, 30).map((background, index) => (
            <SwiperSlide key={background.file_path}>
                <img
                    src={`https://image.tmdb.org/t/p/w780${background.file_path}`}
                    className="img-fluid w-100 rounded"
                    data-bs-toggle="modal"
                    data-bs-target="#galleryModal"
                    onClick={() =>
                        setActiveImage(`https://image.tmdb.org/t/p/w780${background.file_path}`)
                    }
                />
            </SwiperSlide>
        ));
    }

    useEffect(() => {
        const images = document.querySelectorAll('.gallery-item');
        const modalImage = document.getElementById('galleryModalImage');

        images.forEach(img => {
            img.addEventListener('click', () => {
                modalImage.src = img.src;
            });
        });

        // cleanup
        return () => {
            images.forEach(img => {
                img.removeEventListener('click', () => {});
            });
        };
    }, [backgrounds]);

    return (
        <section className="midia">
            <div className="container-xl">
                <div className="midia__header pb-5">
                    <h2 className="fw-bold">Mídia</h2>
                </div>
                <div className="midia__videos pb-5">
                    <div className="midia__content-header">
                        <h2>Vídeos ({videos.length})</h2>
                        <a href="#" className="button__link">Ver mais</a>
                    </div>
                    <div className="midia__videos-content">
                        <Swiper
                            modules={[Navigation, Pagination, Keyboard, Mousewheel]}
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            keyboard={{ enabled: true }}
                            mousewheel
                            grabCursor={true}
                            loop={false}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                                1200: { slidesPerView: 3 }
                            }}
                        >
                            {/* Função para gerar os swiper dinâmicamente*/}
                            {handleVideos()}
                        </Swiper>
                    </div>
                </div>
                <div className="midia__poster pb-5">
                    <div className="midia__content-header">
                        <h2>Posters ({posters.slice(0, 8).length})</h2>
                        <a href="#" className="button__link">Ver mais</a>
                    </div>

                    <div className="midia__poster-content">
                        {posters.length > 1 ? (
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={4}
                                watchOverflow={true}
                                breakpoints={{
                                    320: { slidesPerView: 1 },
                                    576: { slidesPerView: 3 },
                                    992: { slidesPerView: 4 }
                                }}
                            >
                                {handlePosters()}
                            </Swiper>
                        ) : (
                            <div className="empty-state">
                                <p>Poster não disponível.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="midia__background pb-5">
                    <div className="midia__content-header">
                        <h2>Imagens de fundo ({backgrounds?.slice(0, 30).length || 0})</h2>
                        <a href="#" className="button__link">Ver mais</a>
                    </div>

                    <div className="midia__background-content">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={3}
                            zoom={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                992: { slidesPerView: 2 }
                            }}
                        >
                            {handleBackgrounds()}
                        </Swiper>
                    </div>

                </div>

                <div
                    className="modal fade"
                    id="galleryModal"
                    tabIndex="-1"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                        <div className="modal-content bg-dark text-white">

                            {/* Header */}
                            <div className="modal-header border-0">
                                <h5 className="modal-title">Galeria</h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    data-bs-dismiss="modal"
                                />
                            </div>

                            {/* Body */}
                            <div className="modal-body">
                                {/* Imagem ativa */}
                                {activeImage && (
                                    <div className="text-center mb-3">
                                        <img
                                            src={activeImage}
                                            className="img-fluid rounded"
                                            alt="Imagem ampliada"
                                        />
                                    </div>
                                )}

                                {/* Miniaturas */}
                                <div className="container-fluid">
                                    <div className="row g-2">
                                        {backgrounds.slice(0, 30).map(bg => {
                                            const imgUrl = `https://image.tmdb.org/t/p/w185${bg.file_path}`;
                                            const fullImg = `https://image.tmdb.org/t/p/w780${bg.file_path}`;

                                            return (
                                                <div className="col-3" key={bg.file_path}>
                                                    <img
                                                        src={imgUrl}
                                                        className="img-fluid rounded gallery-thumb"
                                                        onClick={() => setActiveImage(fullImg)}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Midia