
import './App.css'
import {SignIn} from "./component/signin/SignIn.tsx";
import {useUser, useUserDispatcher} from "./context/UserContext.tsx";
import {useEffect} from "react";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "./firebase.ts";



function App() {
    const user = useUser();
    const userDispatcher = useUserDispatcher();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                userDispatcher({type: 'sign-in', user})
            } else {
                userDispatcher({type: 'sign-out'})
            }
        })
    }, []);


  return (
    <>
        {user? <h1>To-do App</h1>: <SignIn/>}
    </>
  )
}

