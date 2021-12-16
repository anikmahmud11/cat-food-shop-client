import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';


const Login = () => {
    const{signInUsingGoogle}=useAuth();
    const location = useLocation();
    console.log(location.state?.from);
    const navigate = useNavigate();
    
   const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(result=>{
            navigate(location.state?.from || '/home')
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
        </div>
    );
};

export default Login;