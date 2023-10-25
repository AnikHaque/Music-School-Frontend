import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaUser, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Hook/UseAxiosSecure';

const ManageUsers = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });

    const handleAdmin = user =>{
        fetch(`https://summer-camp-server-green.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleInstructor = user =>{
        fetch(`https://summer-camp-server-green.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className='w-full'>
            <Helmet>
                <title>SummerCamp || ManageUsers</title>
            </Helmet>
            <div>
                <h3 className='text-3xl font-semibold'>Total Users: {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className='text-xl mx-auto'>{user.role === 'admin' ? 'admin' : <button onClick={()=>handleAdmin(user)} className="btn bg-[#6a9955] text-white"><FaUserShield></FaUserShield></button>}</td>
                                    <td className='text-xl mx-auto'>{user.role === 'instructor' ? 'instructor' : <button onClick={()=>handleInstructor(user)} className="btn bg-[#6a9955] text-white"><FaUser></FaUser></button>}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;