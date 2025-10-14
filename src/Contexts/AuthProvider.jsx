import React from 'react';
import { AuthorizationContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase Configaration/Firebase.config';

const AuthProvider = ({children}) => {
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        createUser,
    }
    
    return (
        <div>
            <AuthorizationContext value={authInfo}>
                {children}
            </AuthorizationContext>
        </div>
    );
};

export default AuthProvider;