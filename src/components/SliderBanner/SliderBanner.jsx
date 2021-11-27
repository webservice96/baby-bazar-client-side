import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.css';
import 'swiper/modules/navigation/navigation.min.css';

import SwiperCore, {
    Navigation
} from 'swiper';
import Slider from './Slider/Slider';
SwiperCore.use([Navigation]);

const SliderBanner = () => {
    return (
        <>
            <div className="2xl:container mx-auto">
                <Swiper navigation={true}>
                    <SwiperSlide> <Slider /> </SwiperSlide>
                    <SwiperSlide> <Slider /> </SwiperSlide>
                    <SwiperSlide> <Slider /> </SwiperSlide>
                    <SwiperSlide> <Slider /> </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default SliderBanner;