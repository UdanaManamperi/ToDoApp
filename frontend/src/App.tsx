import './App.css'
import {SignIn} from "./component/signin/SignIn.tsx";
import {useUser, useUserDispatcher} from "./context/UserContext.tsx";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "./firebase.ts";
import {Loader} from "./component/loader/Loader.tsx";
import {Header} from "./component/header/Header.tsx";
import {Form} from "./component/form/Form.tsx";

function App() {
    const user = useUser();
    const userDispatcher = useUserDispatcher();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setLoader(false);
                userDispatcher({type: 'sign-in', user})
            } else {
                userDispatcher({type: 'sign-out'})
            }
        })
    }, []);

    return (
        <>
            {loader? <Loader/> :
                user?
                    (<>
                            <Header/>
                            <Form/>
                        </>
                    ): <SignIn/>
            }
        </>
    )
}

export default App