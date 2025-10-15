import React, { use } from 'react';
import { AuthorizationContext } from '../Contexts/AuthContext';
import { Navigate } from 'react-router';

const Private = ({children}) => {
    const {user} = use(AuthorizationContext)

    if(user ){
        return children;
    }
    
    return <Navigate to="/login"></Navigate> 
};

export default Private;