import { useEffect, useState } from "react";

import TaskItem from "./components/TaskItem";
import axios from "axios";

const App = () => {
    const [tasks, setTasks] = useState([
        
    ]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const {data} = await axios.get("http://localhost:8000/tasks");
            setTasks(data)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default App;
