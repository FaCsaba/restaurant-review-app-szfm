import { Link, useNavigate } from "react-router";
import "./login.component.css";
import { FormEvent, useState } from "react";
import { useLoginMutation } from "../../queries/user.query";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { mutate: login, error, isLoading } = useLoginMutation();

    function onLoginSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        login({ username, password }, { onSuccess: () => navigate('/') });
    }

    return (
        <form className="user-form" onSubmit={onLoginSubmit}>
            <h1 className="login-header">Login</h1>
            {error as Error && <h2 className="danger">{(error as Error).message}</h2>}
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
            <button type="submit" className="button" disabled={isLoading}>Submit</button>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </form>
    );
};

export default Login;