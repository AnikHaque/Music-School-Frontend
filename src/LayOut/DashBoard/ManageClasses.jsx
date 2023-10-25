import React, { useContext } from 'react';
import UseManageClasses from '../../Hook/UseManageClasses';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [classes, refetch] = UseManageClasses();
    const {user} = useContext(AuthContext);

    const handleApprove = item =>{
        fetch(`https://summer-camp-server-green.vercel.app/classes/approve/${item._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
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

    const handleDeny = item =>{
        fetch(`https://summer-camp-server-green.vercel.app/classes/deny/${item._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
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


    return (
        <div className='w-full'>
            <Helmet>
                <title>SummerCamp || Manage Classes</title>
            </Helmet>
            <div>
            <h3 className='text-3xl font-semibold text-center'>Manage Classes</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Students</th>
                            <th>Pending</th>
                            <th>Approve</th>
                            <th>Deny</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) =>
                            <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.instructorName}
                                </td>
                                <td>${item.price}</td>
                                <td className='text-center'>{item.students}</td>
                                <td>
                                    pending
                                </td>
                                <td className='text-xl mx-auto'>{item.role === 'approve' ? 'Approved' : <button onClick={()=>handleApprove(item)} className="btn bg-[#6a9955] text-white">Approve</button>}</td>
                                <td className='text-xl mx-auto'>{item.role === 'deny' ? 'Denied' :
                                    <button onClick={()=>handleDeny(item)} className="btn bg-red-600 text-white">Deny</button> }
                                </td>
                            </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default ManageClasses;