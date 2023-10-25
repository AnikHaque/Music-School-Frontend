import React, { useEffect, useState } from 'react';
import { Flip } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';

const InstructorPages = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-server-green.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setPopularInstructors(data))
    }, []);
    // console.log(popularInstructors);
    return (
        <div>
            <Helmet>
                <title>SummerCamp || Instructors</title>
            </Helmet>
            <div className='py-20'>
                <Flip>
                    <div className='text-center mt-10'>
                        <h3 className='text-3xl font-semibold text-[#6a9955]'>---Our Instructors---</h3>
                        <p>Explore several art forms as your life builds creativity and <br /> confidence in our new visual arts classes for all ages</p>
                    </div>
                </Flip>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-10 items-center'>
                    {
                        popularInstructors.map(popularInstructor =>
                            <div key={popularInstructor._id} className='items-center'>
                                <div className="card card-side bg-base-100 shadow-xl">
                                    <figure><img className='w-full h-[300px]' src={popularInstructor.image} alt="Movie" /></figure>
                                    <div className="card-body py-auto my-auto">
                                        <h2 className="card-title">{popularInstructor.name}</h2>
                                        <p>{popularInstructor.instrument}</p>
                                        <p>{popularInstructor.email}</p>
                                        <p>Taken Classes: {popularInstructor.numClasses}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default InstructorPages;