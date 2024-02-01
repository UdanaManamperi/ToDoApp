import  './Task.css'
import {TaskDTO} from "../../dto/TaskDTO.ts";
import React, {useId, useState} from "react";
import {useTaskDispatcher} from "../../context/TaskContext.tsx";
import {deleteTask, updateTask} from "../../service/task-service.ts";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {signOut} from "firebase/auth";

export function Task(task:TaskDTO) {
    const id=useId();
    const [checked, setChecked] = useState(task.status);
    const taskDispatcher = useTaskDispatcher();

    function handleChecked(e: React.ChangeEvent<HTMLInputElement>) {
        updateTask(task).then(value => {
            taskDispatcher({
                type: 'update',
                task
            });
            setChecked(!checked);
        }).catch(err => {
            console.log(err);
            alert("Failed to update task")
        })
    }

    function handleDelete() {
        deleteTask(task.id!).then(value => {
            taskDispatcher({
                type: 'delete',
                id: task.id
            })
        }).catch(err => alert("Failed to delete task"))
    }

    return (
        <div className="Task d-flex align-items-center justify-content-between p-2 px-4">
            <div className="d-flex gap-2">
                <input
                    checked={checked ?? false}
                    onChange={handleChecked} id={id} type="checkbox" className="form-check-input"/>
                <label htmlFor={id} className="form-check-label">{task.description}</label>
            </div>
            <i onClick={handleDelete} className="bi bi-trash fs-4"></i>
        </div>

    );
}

//uulhnp;jpo