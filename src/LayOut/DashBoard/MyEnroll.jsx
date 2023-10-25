import React from 'react';
import UsePayments from '../../Hook/UsePayments';
import { Helmet } from 'react-helmet';

const MyEnroll = () => {
    const [payment] = UsePayments();
    const reversedPayment = [...payment].reverse();
    // console.log(payment);
    return (
        <div className='w-full'>
            <Helmet>
                <title>SummerCamp || MyEnrollClasses</title>
            </Helmet>
            <div>
                <h3 className='text-3xl text-[#6a9955] font-semibold py-5'>My Enrolled Classes</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Class No</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reversedPayment.map((item, index) =>
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <span>{item.itemName[0]}</span> <br />
                                        <span>{item.itemName[1]}</span> <br />
                                        <span>{item.itemName[2]}</span>
                                    </td>
                                    <td>{item.date}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEnroll;