import React from 'react';
import SingelItemSlider from './Slider/SingelItemSlider';
import slider1 from "../assets/slider1.webp"
import slider2 from "../assets/slider2.webp"
import slider3 from "../assets/slider3.webp"
import slider4 from "../assets/slider4.webp"
import slider5 from "../assets/slider5.webp"
import slider6 from "../assets/slider6.webp"

const Slider = () => {

const slider =[
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
]

    return (
        <div className='slider-container'>
            <SingelItemSlider slider={slider}/>
        </div>
    );
}

export default Slider;
