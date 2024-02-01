import  './Task.css'
import {TaskDTO} from "../../dto/TaskDTO.ts";
import React, {useId, useState} from "react";
import {useTaskDispatcher} from "../../context/TaskContext.tsx";
import {deleteTask, updateTask} from "../../service/task-service.ts";

export function Task(task:TaskDTO) {
    const id=useId();
    const taskDispatcher = useTaskDispatcher();
    const [remove, setRemove] = useState(false);

    function handleChecked(e: React.ChangeEvent<HTMLInputElement>) {
        updateTask(task).then(value => {
            taskDispatcher({
                type: 'update',
                task
            });

        }).catch(err => {
            
            alert("Failed to update task")
        })
    }

    function handleDelete() {
        deleteTask(task.id!).then(value => {
            setRemove(true);
            setTimeout( () =>{
                taskDispatcher({
                    type: 'delete',
                    id: task.id
                });
            }, 500);
        }).catch(err => alert("Failed to delete task"))
    }

    return (
        <div className={`Task d-flex align-items-center justify-content-between p-2 px-4
            ${!remove ? 'animate__animated animate__slideInUp animate__faster' : 'delete animate__animated animate__slideOutLeft animate__faster'}`}>
            <div className="d-flex gap-2">
                <input
                    checked={task.status!}
                    onChange={handleChecked} id={id} type="checkbox" className="form-check-input"/>
                <label htmlFor={id} className="form-check-label">{task.description}</label>
            </div>
            <i onClick={handleDelete} className="bi bi-trash fs-4"></i>
        </div>

    );
}

//uulhnp;jpo