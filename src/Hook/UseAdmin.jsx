import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {
   const {user} = useContext(AuthContext);
   const [axiosSecure] = UseAxiosSecure();
   const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !!user?.email && !!localStorage.getItem('access-token'),
    queryFn: async () =>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        // console.log('is admin response', res);
        return res.data.admin;
    }
   })
   return [isAdmin, isAdminLoading]
};

export default UseAdmin;