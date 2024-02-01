import './Form.css'
import React, {useRef, useState} from "react";
import {useTaskDispatcher} from "../../context/TaskContext.tsx";
import {TaskDTO} from "../../dto/TaskDTO.ts";
import {saveTask} from "../../service/task-service.ts";
import {useUser} from "../../context/UserContext.tsx";
export function Form() {
    const [value, setValue] = useState("");
    const txtRef = useRef<HTMLInputElement>(null);
    const taskDispatcher = useTaskDispatcher();
    const user = useUser();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if(!value.trim()) return;
        // Todo: Create a new task
        // Todo: Add into the task list
        saveTask(new TaskDTO(null, value, null, user?.email!))
            .then(task => {
                taskDispatcher({
                    type: 'add',
                    task: task
                });
                setValue("");
                txtRef.current!.focus();
            }).catch(err => {alert(err)})


        setValue("");
        txtRef.current!.focus();
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="Form bg-body d-flex gap-2 p-2 px-4 border-bottom">
                <input
                    ref={txtRef}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Eg. Finish react to-do app"
                    className="form-control shadow-sm rounded" type="text"/>
                <button className="btn btn-primary shadow-sm rounded">ADD</button>
            </form>
        </>
    );
}