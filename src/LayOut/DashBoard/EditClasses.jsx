import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';

const EditClasses = () => {
    const addClass = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const {_id, name, price, shortDescription, availableSeats, image} = addClass;
    console.log(image);

    const { user } = useContext(AuthContext);
    const onsubmit = data => {
        // console.log(data);
                    const { name, price, category, instructorName, email, shortDescription, availableSeats, image } = data;

                    const updateClasses = { name, price: parseFloat(price), category, instructorName, email, shortDescription, availableSeats: parseFloat(availableSeats), image }
                    console.log(updateClasses);
                    fetch(`https://summer-camp-server-green.vercel.app/instructor-class/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(updateClasses)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.modifiedCount > 0) {
                                Swal.fire('Updated Barbie SuccessFully');
                                reset();
                            }
                        })
                    }

    return (
        <div className='w-full p-10 text-center'>
            <Helmet>
                <title>SummerCamp || UpdateClass</title>
            </Helmet>
            <div>
                <h3 className='text-3xl text-[#6a9955] font-semibold py-5'>Update a Classes</h3>

                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Class name<span className='text-[#6a9955]'>*</span></span>
                            </label>
                            <input type="text" defaultValue={name} placeholder="Class name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Available Seats<span className='text-[#6a9955]'>*</span></span>
                            </label>
                            <input type="text" defaultValue={availableSeats} placeholder="availableSeats" {...register("availableSeats", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor name<span className='text-[#6a9955]'>*</span></span>
                            </label>
                            <input type="text" defaultValue={user.displayName} placeholder='Instructor Name'  {...register("instructorName", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Email<span className='text-[#6a9955]'>*</span></span>
                            </label>
                            <input type="text" defaultValue={user.email} placeholder='Instructor Email'  {...register("email", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Category<span className='text-[#6a9955]'>*</span></span>
                            </label>
                            <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>popular</option>
                                <option>common</option>
                            </select>
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price<span className='text-[#6a9955]'>*</span></span>
                            </label>
                            <input type="number" defaultValue={price} placeholder="price" {...register("price", { required: true })} className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Short Description<span className='text-[#6a9955]'>*</span></span>
                        </label>
                        <textarea defaultValue={shortDescription} {...register("shortDescription", { required: true })} className='textarea textarea-bordered h-24 w-full ' placeholder='Bio'></textarea>
                    </div>
                    <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Image<span className='text-[#6a9955]'>*</span></span>
                            </label>
                            <input type="text" defaultValue={image} placeholder="img URL" {...register("image", { required: true })} className="input input-bordered w-full " />
                        </div>
                    <input className='btn bg-[#6a9955] border-0 mt-5 text-white' type="submit" value="Update Class" />
                </form>
            </div>
        </div>
    );
};
// {...register("image", { required: true }
export default EditClasses;