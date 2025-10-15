import React, { use } from 'react';
import { AuthorizationContext } from '../Contexts/AuthContext';
import { Navigate } from 'react-router';

const Private = ({children}) => {
    const {user , loading} = use(AuthorizationContext)

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>

    }
    if(user ){
        return children;
    }
    
    return <Navigate to="/login"></Navigate> 
};

export default Private;