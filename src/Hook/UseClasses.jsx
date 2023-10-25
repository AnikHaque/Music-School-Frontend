import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProvider';

const UseClasses = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () =>{
            const res = await fetch(`https://summer-camp-server-green.vercel.app/instructor-class?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
      })

      return [classes, refetch]
};

export default UseClasses;