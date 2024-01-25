package lk.ijse.dep11.todo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/tasks")
@CrossOrigin
public class TaskHttpController {

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public void createTask() {
        System.out.println("createTask()");
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping
    public void updateTask() {
        System.out.println("updateTask");
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping
    public void deleteTask() {
        System.out.println("deleteTask");
    }

    @GetMapping
    public void getAllTasks() {
        System.out.println("getAllTasks");
    }


}
