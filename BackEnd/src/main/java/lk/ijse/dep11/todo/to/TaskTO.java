package lk.ijse.dep11.todo.to;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.*;
import javax.validation.groups.Default;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskTO implements Serializable {
    @Null(message = "Id should be empty")
    private Integer id;
    @NotBlank(message = "Description should not be empty")
    private String description;
    @NotNull(message = "Status should not be empty", groups = Update.class)
    @Null(message = "Status should be empty", groups = Create.class)
    private Boolean status;
    @NotEmpty(message = "Email can't be empty")
    @Email
    private String email;

    public interface Update extends Default{}
    public interface Create extends Default{}
}
