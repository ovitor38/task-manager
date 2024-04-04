import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

import "./TaskItem.scss";
import { useAlert } from "react-alert";

const TaskItem = ({ task, fetchTasks }) => {
    const alert = useAlert();

    const handleTaskDeletion = async () => {
        try {
            await axios.delete(`http://localhost:8000/tasks/${task._id}`);

            await fetchTasks();

            alert.success("Tarefa deletada com sucesso");
        } catch (_error) {
            alert.error("Houve um erro");
        }
    };

    const handleTaskCompletionChange = async (e) => {
        try {
            console.log(e);

            await axios.patch(`http://localhost:8000/tasks/${task._id}`, {
                isCompleted: e.target.checked,
            });

            await fetchTasks()

            alert.success("A Tarefa foi modificada com sucesso")
        } catch (_error) {
            alert.error("Houve um erro");
        }
    };

    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.description}
                    <input
                        type="checkbox"
                        defaultChecked={task.isCompleted}
                        onChange={(e) => handleTaskCompletionChange(e)}
                    />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>
            <div className="delete">
                <AiOutlineDelete
                    size={18}
                    color="#f97474"
                    onClick={handleTaskDeletion}
                />
            </div>
        </div>
    );
};

export default TaskItem;
