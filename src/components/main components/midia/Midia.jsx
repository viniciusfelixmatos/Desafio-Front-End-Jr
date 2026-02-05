import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import './Midia.css'

function Midia({videos}) {
    

    console.log(videos, "Camara")

    {/*CAMARAO*/ }
    console.log(videos.key, "CAMARAO");

    function handleVideos() {
        return videos.map(video => (
            <SwiperSlide>
                <div className="item-midia">
                    <iframe width="420" height="315"
                        src={`https://www.youtube.com/watch?v=${video.key}`}>
                    </iframe>
                </div>
            </SwiperSlide>
        ));
    };

    
    return (
        <section className="midia">
            <div className="container-xl">
                <div className="midia__header pb-5">
                    <h2 className="fw-bold">Mídia</h2>
                </div>
                <div className="midia__videos pb-5">
                    <div className="midia__content-header">
                        <h2>Vídeos (8)</h2>
                        <a href="#" className="button__link">Ver mais</a>
                    </div>
                    <div className="midia__videos-content">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={'auto'}
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                576: { slidesPerView: 2 },
                                992: { slidesPerView: 3 }
                            }}
                        >
                            {/* Função para gerar os swiper dinâmicamente*/}

                            {handleVideos()}

                            {/* 

                            <iframe width="420" height="315"
                                src="https://www.youtube.com/watch?v=MQHzdpnOq48">
                            </iframe>


                            <SwiperSlide><div className="item-midia"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-midia"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-midia"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-midia"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-midia"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-midia"><img src="" alt="" /></div></SwiperSlide>
                            */}
                        </Swiper>
                    </div>
                </div>
                <div className="midia__poster pb-5">
                    <div className="midia__content-header">
                        <h2>Posters (8)</h2>
                        <a href="#" className="button__link">Ver mais</a>
                    </div>
                    <div className="midia__poster-content">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={'4'}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 20 },
                                576: { slidesPerView: 3 },
                                992: { slidesPerView: 4 }
                            }}
                        >
                            <SwiperSlide><div className="item-poster"><img src="/imgs/Duncan-o-Alto-TV-show.png" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="/imgs/Duncan-o-Alto-TV-show.png" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="/imgs/Duncan-o-Alto-TV-show.png" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="/imgs/Duncan-o-Alto-TV-show.png" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="/imgs/Duncan-o-Alto-TV-show.png" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="/imgs/Duncan-o-Alto-TV-show.png" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="/imgs/Duncan-o-Alto-TV-show.png" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="/imgs/Duncan-o-Alto-TV-show.png" alt="" /></div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="midia__background pb-5">
                    <div className="midia__content-header">
                        <h2>Imagens de fundo (8)</h2>
                        <a href="#" className="button__link">Ver mais</a>
                    </div>
                    <div className="midia__background-content">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={3}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                992: { slidesPerView: 2 }
                            }}
                        >
                            <SwiperSlide><div className="item-background"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-background"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-background"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-background"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-background"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-background"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-background"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-background"><img src="" alt="" /></div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Midia