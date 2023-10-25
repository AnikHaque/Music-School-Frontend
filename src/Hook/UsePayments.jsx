import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UsePayments = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { refetch, data: payment = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () =>{
            const res = await fetch(`https://summer-camp-server-green.vercel.app/payments?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
      })

      return [payment, refetch]
};

export default UsePayments;