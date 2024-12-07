import { Link } from "react-router";
import "./login.component.css";
import { FormEvent, useState } from "react";



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onLoginSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // TODO
    }

    return (
        <form className="user-form" onSubmit={onLoginSubmit}>
            <h1 className="login-header">Login</h1>
            <label>Username</label>
            <div className="icon-input">
                <i className="bi bi-person-fill icon"></i>
                <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <label>Password</label>
            <div className="icon-input">
                <i className="bi bi-shield-lock icon"></i>
                <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="button">Submit</button>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </form>
    );
};

export default Login;