import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Flip } from 'react-awesome-reveal';

const Gallery = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div>
            <Flip>
            <div className='text-center mt-10'>
                <h3 className='text-3xl font-semibold text-[#6a9955]'>---Our Gallery---</h3>
                <p>Explore several art forms as your life builds creativity and <br /> confidence in our new visual arts classes for all ages</p>
            </div>
            </Flip>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10'>
                <img data-aos="fade-right" src="https://i.ibb.co/fQw6Lrw/blog1-770x520.jpg" alt="" />
                <img data-aos="fade-left" className='h-full w-full' src="https://i.ibb.co/pvJtZHQ/Class-5-770x440.jpg" alt="" />
                <img data-aos="fade-up" src="https://i.ibb.co/Cv1brsq/blog2-770x520.jpg" alt="" />
                <img data-aos="fade-left" src="https://i.ibb.co/N9RnZp5/blog3-770x520.jpg" alt="" />
                <img data-aos="fade-right" src="https://i.ibb.co/f17Rywc/Class-2-770x440.jpg" alt="" />
                <img data-aos="fade-left" src="https://i.ibb.co/wNrLGqC/Class-3-770x440.jpg" alt="" />
                <img data-aos="fade-up" src="https://i.ibb.co/ZNkx3Jh/Class-4-770x440.jpg" alt="" />
                <img data-aos="fade-left" src="https://i.ibb.co/Nthxgy0/Class-6-770x440.jpg" alt="" />
            </div>
        </div>
    );
};

export default Gallery;