import  './Task.css'
import {TaskDTO} from "../../dto/TaskDTO.ts";
import {useId} from "react";


export function Task({description}:TaskDTO) {
    const id=useId();

    return (

    <div>
        <input id={id} type="checkbox" className="form-check-input"/>
        <label htmlFor={id} className="form-check-label">{description}</label>
    </div>

);
}