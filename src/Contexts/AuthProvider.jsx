import React, { useEffect, useState } from 'react';
import { AuthorizationContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase Configaration/Firebase.config';

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const createUser = (ab, cd)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, ab, cd)
    }

    const singInUser = (ab , cd)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, ab , cd)
    }

    const signOutUser = () =>{
        setLoading(true)
       return signOut(auth)
    }

    const authInfo = {
        loading,
        user,
        createUser,
        singInUser,
        signOutUser
    }


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            // console.log(currentUser.email)
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])



// Get SingInUser  Method
    
    // onAuthStateChanged(auth, (currentUser)=>{
    //     if(currentUser){
    //         console.log("from if singIn ",currentUser)
    //     }
    //     else{
    //         console.log("from else singIn ",currentUser)
    //     }
    // })
    

    return (
        <div>
            <AuthorizationContext.Provider value={authInfo}>
                {children}
            </AuthorizationContext.Provider>
        </div>
    );
};

export default AuthProvider;