import CustomButton from "../components/CustomButton";

import "./Login.scss";

import logo from "../assets/images/logo-2.png";

const Login = () => {
    return (
        <div className="login-container">
            <img src={logo} alt="Full Stack Club" />
            <CustomButton>Entrar</CustomButton>
        </div>
    );
};

export default Login;
