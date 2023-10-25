import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import UseInstructor from '../Hook/UseInstructor';

const InstructorPrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = UseInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && isInstructor){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default InstructorPrivateRoute;