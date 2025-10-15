import React, { use } from 'react';
import { AuthorizationContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const Private = ({children}) => {
    const {user , loading} = use(AuthorizationContext)
    const location = useLocation()
    console.log(location)

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>

    }
    if(user ){
        return children;
    }
    
    return <Navigate state={location?.pathname} to="/login"></Navigate> 
};

export default Private;