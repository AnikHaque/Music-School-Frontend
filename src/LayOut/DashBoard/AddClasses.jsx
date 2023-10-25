import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Hook/UseAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';

const img_hosting_token=import.meta.env.VITE_Image_Uploade_token;

const AddClasses = () => {
    const [axiosSecure] = UseAxiosSecure();
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url =`https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        // console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse);
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, category, instructorName, email, shortDescription, availableSeats} = data;
                const newItem = {name, price: parseFloat(price), category, instructorName, email, shortDescription, availableSeats:parseFloat(availableSeats), image:imgURL}
                console.log(newItem);
                axiosSecure.post('/classes', newItem)
                .then(data => {
                    console.log('after posting new Classes', data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your Class has been saved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    };

    return (
        <div className='w-full p-10 text-center'>
            <Helmet>
                <title>SummerCamp || AddClass</title>
            </Helmet>
            <div>
                <h3 className='text-3xl text-[#6a9955] font-semibold py-5'>Add a Classes</h3>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-2 gap-5'>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class name<span className='text-[#6a9955]'>*</span></span>
                    </label>
                    <input type="text" placeholder="Class name" {...register("name", {required: true, maxLength: 120})} className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seats<span className='text-[#6a9955]'>*</span></span>
                    </label>
                    <input type="text" placeholder="availableSeats" {...register("availableSeats", {required: true, maxLength: 120})} className="input input-bordered w-full " />
                </div>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor name<span className='text-[#6a9955]'>*</span></span>
                    </label>
                    <input type="text" defaultValue={user.displayName} placeholder='Instructor Name'  {...register("instructorName", {required: true, maxLength: 120})} className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Email<span className='text-[#6a9955]'>*</span></span>
                    </label>
                    <input type="text" defaultValue={user.email} placeholder='Instructor Email'  {...register("email", {required: true, maxLength: 120})} className="input input-bordered w-full " />
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
                    <input type="number" placeholder="price" {...register("price", { required: true })} className="input input-bordered w-full " />
                </div>
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Short Description<span className='text-[#6a9955]'>*</span></span>
                    </label>
                    <textarea {...register("shortDescription", { required: true })} className='textarea textarea-bordered h-24 w-full ' placeholder='Bio'></textarea>
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Item Image<span className='text-[#6a9955]'>*</span></span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className='btn bg-[#6a9955] border-0 mt-5 text-white' type="submit" value="Add Class" />
            </form>
            </div>
        </div>
    );
};

export default AddClasses;