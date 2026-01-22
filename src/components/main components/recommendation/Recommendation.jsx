import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import './Recommendation.css'

function Recommendation() {
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
                        <SwiperSlide><div className="item"><img src="" alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="item"><img src="" alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="item"><img src="" alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="item"><img src="" alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="item"><img src="" alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="item"><img src="" alt="" /></div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Recommendation
