import { Alert, Button, TextField } from '@mui/material';
import  React, { useState }  from 'react';



const MakeAdmin = () => {
    const [email,setEmail]=useState('');
    const[success, setSuccess]=useState(false)

    const handleOnBlur= e=>{
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = {email};
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)
            
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.modifiedCount){
                console.log(data)
                setSuccess(true)
            }
            console.log(data);
        })


        e.preventDefault()
    }


    return (
        <div>
            <div>
            <h2 className="text-center p-5 text-danger">Make an Admin</h2>
            <form className="container w-auto mx-auto pb-5 ps-5 " onSubmit={handleAdminSubmit}>
                <TextField
                    error
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button color="error" type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
        </div>
    );
};

export default MakeAdmin;