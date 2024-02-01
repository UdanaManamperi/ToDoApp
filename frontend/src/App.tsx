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
        <div className="d-flex flex-column min-vh-100">
            {loader ? <Loader/> :
                user ?
                    <>
                        <Header/>
                        <Form/>
                        <TaskList/>
                    </> : <SignIn/>
            }
            <footer className="footer mt-auto">
                <div className="d-flex align-items-center justify-content-center container  border-top">
                    <p className="text-muted mb-0">Copyright &copy; 2023 Udana Manamperi. All Right Reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default App