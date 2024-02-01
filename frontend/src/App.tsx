import './App.css'
import {SignIn} from "./component/signin/SignIn.tsx";
import {useUser, useUserDispatcher} from "./context/UserContext.tsx";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "./firebase.ts";
import {Loader} from "./component/loader/Loader.tsx";
import {Header} from "./component/header/Header.tsx";
import {Form} from "./component/form/Form.tsx";
import {useTaskDispatcher, useTaskList} from "./context/TaskContext.tsx";
import {getAllTasks} from "./service/task-service.ts";

function App() {
    const user = useUser();
    const userDispatcher = useUserDispatcher();
    const [loader, setLoader] = useState(true);
    const taskList = useTaskList();
    const taskDispatcher = useTaskDispatcher();


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setLoader(false);
            if(user) {
                userDispatcher({type: 'sign-in', user});
                getAllTasks(user.email!).then(taskList => {
                    taskDispatcher({type: 'set-list', taskList})
                });


            } else {
                userDispatcher({type: 'sign-out'})
                taskDispatcher({type: 'set-list', taskList: []})
            }
        })
    }, []);

    return (
        <>
            {loader? <Loader/> :
                user?
                    <>
                        <Header/>
                        <Form/>
                        <div>
                            {taskList.map(task =>
                                <h1>{task.description}</h1>
                            )}
                        </div>
                    </> : <SignIn/>

            }
        </>
    )
}

export default App