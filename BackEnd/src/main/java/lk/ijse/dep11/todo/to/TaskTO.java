package lk.ijse.dep11.todo.to;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskTO implements Serializable {
    @Null(message = "Id should be empty")
    private Integer id;
    @NotBlank(message = "Description should not be empty")
    private String description;
    @NotNull(message = "Status should not be empty")
    private Boolean status;
    @NotEmpty(message = "Email can't be empty")
    @Email
    private String email;
}
