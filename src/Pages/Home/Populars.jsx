import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Flip } from 'react-awesome-reveal';

const Populars = () => {
    const [populars, setPopulars] = useState([]);

    useEffect(()=>{
      Aos.init({duration:3000});
  },[]);

    useEffect(()=>{
        fetch('https://summer-camp-server-green.vercel.app/classes')
        .then(res => res.json())
        .then(data => setPopulars(data))
    },[])
    // console.log(populars);
    const popularClasses = populars.filter(popular => popular.category === 'popular')

    return (
        <>
        <Flip>
        <div className='text-center mt-10'>
            <h3 className='text-3xl font-semibold text-[#6a9955]'>---Popular Classes---</h3>
            <p>Explore several art forms as your life builds creativity and <br /> confidence in our new visual arts classes for all ages</p>
        </div>
        </Flip>
        <div className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                popularClasses.map(popular => 
                <div key={popular._id}>
                  <div data-aos="flip-up" className="card w-100 bg-base-100 shadow-xl">
                <figure><img src={popular.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-semibold">{popular.name}</h2>
                  <p className='text-xl'>{popular.shortDescription}</p>
                  <div className='card-actions justify-between items-center'>
                  <div className="justify-start">
                    <p className=''>{popular.students}</p>
                    <p className=''>{popular.courseTime}</p>
                  </div>
                  <div className="justify-end">
                  <p className='text-[#6a9955]'>Price: ${popular.price}</p>
                  </div>
                  </div>
                </div>
              </div>
                </div>
              )
            }
        </div>
        </>
    );
};

export default Populars;