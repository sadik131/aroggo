import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay ,Pagination} from 'swiper/modules';


const SingelItemSlider = ({ slider }) => {

    return (
        <Swiper
        pagination={{
            clickable: true,
          }}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay,Pagination]}
        >
            {slider.map((slid, index) => <SwiperSlide key={index}>
                <img className='slider-img' src={slid} alt="" />
            </SwiperSlide>)}

        </Swiper>
    );
}

export default SingelItemSlider;
