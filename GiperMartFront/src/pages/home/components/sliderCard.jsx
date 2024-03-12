import React from 'react'
import { nanoid } from 'nanoid';
import Slider from 'react-slick';
import { SampleNextArrow, SamplePrevArrow } from './slidercompont';
import { useGetBanners } from '../service/query/useGetBanners'

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

export const SliderCard = () => {
    const { data } = useGetBanners()

    return (
        <Slider {...settings}>
            {data?.map((item) => (
                <div className="w-full" key={item.id}>
                    <img className='w-full h-[50vh]' src={item.img} alt="" />
                </div>
            ))}
        </Slider>
    )
}

export const Sliders = () => {
    return (
        <div className="w-full mx-auto">
            <SliderCard key={nanoid()} />
        </div>
    )
}

