import { Link } from "react-router";
import "./register.component.css";
import { FormEvent, useState } from "react";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    function onRegisterSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // TODO
    }

    return (
        <form className="user-form" onSubmit={onRegisterSubmit}>
            <h1 className="register-header">Register</h1>
            <label>Username</label>
            <div className="icon-input">
                <i className="bi bi-person-fill icon" />
                <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <label>Password</label>
            <div className="icon-input">
                <i className="bi bi-shield-lock icon" />
                <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <label>Password again</label>
            <div className="icon-input">
                <i className="bi bi-shield-lock icon" />
                <input type="password" placeholder="Password again" required value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)} />
            </div>
            <button className="button" type="submit">Submit</button>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </form>
    );
};

export default Register;