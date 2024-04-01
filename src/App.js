import { useState } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: "1",
            description: "Estudar Programação",
            isCompleted: true,
        },
        {
            id: "2",
            description: "Ler",
            isCompleted: false,
        },
    ]);

    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default App;
