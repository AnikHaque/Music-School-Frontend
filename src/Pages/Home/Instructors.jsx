import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Flip } from 'react-awesome-reveal';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(()=>{
        Aos.init({duration:3000});
    },[])

    // ------------

    useEffect(() => {
        fetch('https://summer-camp-server-green.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    // console.log(instructors);
    const populars = instructors.filter(instructor=> instructor.category === 'popular');
    // console.log(populars);

    return (
        <div className='text-center mx-auto'>
            <Flip>
            <div className='text-center mt-20'>
                <h3 className='text-3xl font-semibold text-[#6a9955]'>---Popular Instructors---</h3>
                <p>Explore several art forms as your life builds creativity and <br /> confidence in our new visual arts classes for all ages</p>
            </div>
            </Flip>
            <div className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    populars.map(popular =>
                        <div data-aos="fade-up" key={popular._id} className='mx-auto justify-center'>
                            <img className='rounded-full w-[250px] h-[250px] p-3 border border-[#6a9955] hover:border-8 hover:p-1 duration-75' src={popular.image} alt="" />
                            <h3 className='text-2xl font-bold mt-5'>{popular.name}</h3>
                            <h5 className='text-xl'>{popular.instrument}</h5>
                            <div className='flex justify-center space-x-3 mt-3 text-xl text-[#6a9955]'>
                                <FaFacebook /><FaInstagram /><FaTwitter />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Instructors;