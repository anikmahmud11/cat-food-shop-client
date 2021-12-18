import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error,setError]=useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        
       return signInWithPopup(auth, googleProvider)
     
        
            .catch(error=>{
                setError(error.message)
            })
            
    }

    const logout =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        },[])
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if (user){
                console.log('state change',user); 
                const { email , displayName:name}= user;
                setUser(user) ;
                saveUser(email,name,'POST');
               
                           
            }
        })
    },[])
    const saveUser =(email,displayName,method) =>{
        const user={email, displayName};
        fetch('http://localhost:5000/users',{
            method:method,
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
    }
    
    return{
        user,
        error,
        logout,
       
        signInUsingGoogle
    }
}
export default useFirebase;