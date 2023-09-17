"Use client"

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useGetLoginMutation } from "../redux/loginSlice";
import "../styles/login.css";
import Logo from "../assets/logo-no-background.svg";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [disable, setDisable] = useState<boolean>(false);
    const [toLogin, {isLoading, isSuccess}] = useGetLoginMutation();

    const login = async () => {
        
        setDisable(true)

        try {


            if(!isSuccess){
                const res = await toLogin({username: username, password: password})

                setDisable(false)
                navigate('/')
            }

        } catch (error) {
            console.log(error)
            setDisable(false)
        }

    }

    return (
        <div className="LoginContainer">

            <div className="LogoItem">
                <div className="LogoFlexbox">
                    
                    <img src={Logo} alt="loot__logo" className="Logo" />
                    
                </div>
            </div>

            <div className="FieldItem">
                <div className="FieldFlexbox">

                        <img src={Logo} alt="loot__logo" className="FieldLogo" />

                        <h1>Hello! Welcome Back.</h1>

                        <label>Username</label>
                        <input 
                            type="text" 
                            className="LoginTextField"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={disable}
                        />


                        <label>Password</label>
                        <input 
                            type="password" 
                            className="LoginTextField"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={disable}
                        />

                        <br/>

                        <button 
                            className="LoginButton"
                            onClick={login}
                            disabled={disable}
                        >
                            Login
                        </button>

                        <p>Don't have an account yet?</p>
                        <button 
                            className="LoginButton"
                            disabled={disable}
                        >
                            Register here!
                        </button>

                </div>
            </div>

        </div>
    );
}

export default Login;