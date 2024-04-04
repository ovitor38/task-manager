import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Tasks from "../components/Tasks";

import "./Home.scss";
import { useEffect } from "react";

const Home = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params]);

    return (
        <div className="home-container">
            <Sidebar />
            <Tasks />
        </div>
    );
};

export default Home;
