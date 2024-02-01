import "./TaskList.css"
import {useTaskDispatcher, useTaskList} from "../../context/TaskContext.tsx";
import {useUser} from "../../context/UserContext.tsx";
import {Task} from "../task/Task.tsx";
import {onAuthStateChanged} from "firebase/auth";
import {useEffect} from "react";
import {auth} from "../../firebase.ts";
import {getAllTasks} from "../../service/task-service.ts";

export function TaskList() {
    const taskList = useTaskList();
    const taskDispatcher = useTaskDispatcher();
    const user = useUser();

    useEffect(() => {
        onAuthStateChanged(auth, user => {

            getAllTasks(user!.email!).then(taskList => {
                taskDispatcher({type: 'set-list', taskList})
            }).catch(err => {
                alert("Failed to load tasks");
            });
            return () => {
                taskDispatcher({type: 'set-list', taskList: []});
            }

        })
    }, []);

    return (
        <>
            {taskList.map(task =>
                <Task key={task.id} {...task}/>
            )}
        </>
    );
}