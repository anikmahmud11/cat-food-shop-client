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
                setUser(user) ;              
            }
        })
    },[])
    const saveUser =(email,displayName) =>{
        const user={email, displayName};
        fetch('http://localhost:5000/users',{
            method:'POST',
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