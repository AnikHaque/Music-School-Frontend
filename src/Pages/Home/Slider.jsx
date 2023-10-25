import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,  Navigation } from 'swiper';
import { Link } from 'react-router-dom';

const Slider = () => {
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (time) => {
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper 
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper w-full"
            >
                <SwiperSlide className='text-white'>
                    <div className="hero slider1 min-h-screen" >
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-semibold text-white">Music is your world</h1>
                                <p className="mb-5 text-white">Don't miss chance</p>
                                <button className="btn bg-[#6a9955] rounded text-white border-0"><Link to="/classes">Start Learning</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero slider2 min-h-screen" >
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-semibold text-white">Music for everyone</h1>
                                <p className="mb-5 text-white">Awaken Possibility</p>
                                <button className="btn bg-[#6a9955] rounded text-white border-0">Start Learning</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero slider3 min-h-screen" >
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-semibold text-white">Start with a note</h1>
                                <p className="mb-5 text-white">Don't miss chance</p>
                                <button className="btn bg-[#6a9955] rounded text-white border-0">Start Learning</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <div className="autoplay-progress" slot="container-end">
                <span ref={progressContent} className='invisible'></span>
                </div>
            </Swiper>
        </>
    );
};

export default Slider;