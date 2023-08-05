import React from 'react';
import './Work.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent works</span>

                <Swiper className="work__container"
                    loop={true}
                    grabCursor={true}
                     spaceBetween={10}
                     autoplay={{
                        delay:2500,
                        disableOnInteraction: false,
                    }}
                     pagination={{
                       clickable: true,
                     }}
                     breakpoints={{
                        350: {
                        slidesPerView: 1,
                           },
                        576: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                       },
                       768: {
                         slidesPerView: 3,
                         spaceBetween: 30,
                       },
                       
                     }}
                     modules={[ Pagination]}
                >
                    {Data.map(({id, image, title, description }) => {
                        return(
                            <SwiperSlide className="work__card" key={id}>
                                <img src={image} alt="" className='work__img' />

                                <h3 className="work__name">{title}</h3>
                                <p className="work__description">{description}</p>
                            </SwiperSlide>
                            )
                         })}

                </Swiper>
    </section>
  )
}

export default Work



