import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import './Midia.css'

function Midia() {
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
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                992: { slidesPerView: 3 }
                            }}
                        >
                            <SwiperSlide><div className="item-midia"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-midia"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-midia"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-midia"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-midia"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-midia"><img src="" alt="" /></div></SwiperSlide>
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
                            slidesPerView={'auto'}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                992: { slidesPerView: 4 }
                            }}
                        >
                            <SwiperSlide><div className="item-poster"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="" alt="" /></div></SwiperSlide>
                            <SwiperSlide><div className="item-poster"><img src="" alt="" /></div></SwiperSlide>
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