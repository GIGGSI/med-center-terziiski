
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'

import { EffectFade, Autoplay } from "swiper";

import { Swiper, SwiperSlide, } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { sliderData } from "./HeaderData"
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay"

import './Header.css'

const Header = ({ id }) => {
    const swiper = useSwiper();

    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <IoArrowForward onClick={() => swiper.slideNext()} className="arrow-buttons" >{children}</IoArrowForward>;
    };

    const SwiperButtonPrev = ({ children }) => {
        const swiper = useSwiper();
        return <IoArrowBack onClick={() => swiper.slidePrev()} className="arrow-buttons" >{children}</IoArrowBack>;
    };
    return (
        <div className='slider-section' id={id}>
            <div className='hero-wrapper'>
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    effect={"fade"}
                    loop={true}
                    autoplay={{
                        delay: 4000
                    }}
                >
                    {sliderData.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="hero-wrapper-slider"
                        >
                            <img src={item.image} alt={item.alt} className="hero-wrapper-slider-image" />
                            {/* <div >
                                <h1 className='hero-wrapper-slider-text'>{item.title}</h1>
                            </div> */}
                        </SwiperSlide>
                    ))}
                    <div className='slider-buttons'>
                        <SwiperButtonPrev />
                        <SwiperButtonNext />
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default Header