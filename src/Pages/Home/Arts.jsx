import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

const Arts = () => {
    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);
    return (
        <div className='h-[300px]'>
            <div className="hero art h-[320px] bg-fixed">
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 data-aos="fade-left" className="mb-5 text-5xl font-semibold text-white">---Let's make art---</h1>
                        <p data-aos="fade-right" className="mb-5 text-white">Bring your life to a trial lesson to find out how much <br /> it enjoy doing music or singing</p>
                        <button data-aos="flip-up" className="btn bg-[#6a9955] border-0 text-white"><Link to='/classes'>Let's Started</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Arts;