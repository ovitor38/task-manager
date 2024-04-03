import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";
import { useAlert } from "react-alert";
import axios from "axios";

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState("");

    alert = useAlert();

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return alert.error(
                    "A tarefa precisa de uma descrição para ser adicionada"
                );
            }

            await axios.post("http://localhost:8000/tasks", {
                description: task,
                isCompleted: false,
            });

            await fetchTasks();

            setTask("");
        } catch (error) {
            alert.erro("Algo deu errado");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />

            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
