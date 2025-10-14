import React, { use } from 'react';
import { AuthorizationContext } from '../Contexts/AuthContext';

const Home = () => {
    const abc = use(AuthorizationContext)
    console.log(abc)
    return (
        <div>
            <h1> This is Home</h1>
        </div>
    );
};

export default Home;