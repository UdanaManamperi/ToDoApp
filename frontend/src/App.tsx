import './App.css'
import {SignIn} from "./component/signin/SignIn.tsx";
import {useUser, useUserDispatcher} from "./context/UserContext.tsx";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "./firebase.ts";
import {Loader} from "./component/loader/Loader.tsx";
import {Header} from "./component/header/Header.tsx";
import {Form} from "./component/form/Form.tsx";
import {TaskList} from "./component/task-list/TaskList.tsx";

function App() {
    const user = useUser();
    const userDispatcher = useUserDispatcher();
    const [loader, setLoader] = useState(true);



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setLoader(false);
            if(user) {
                userDispatcher({type: 'sign-in', user});



            } else {
                userDispatcher({type: 'sign-out'})

            }
        });
        return ()=>unsubscribe();
    }, []);

    return (
        <>
            {loader? <Loader/> :
                user?
                    <>
                        <Header/>
                        <Form/>
                        <TaskList/>
                    </> : <SignIn/>

            }
        </>
    )
}

export default App