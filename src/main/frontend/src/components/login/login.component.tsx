import { FaUser, FaLock } from "react-icons/fa";
import "./login.component.css";



const Login = () => {
  return (
    <div className="wrapper">
        <form>
            <h1>Login</h1>
            <label>Username</label>
            <div className="input-box">
                <input type="text" placeholder="Username" required />
                <FaUser className='icon' />
            </div>
            <label>Password</label>
            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className="icon" />
            </div>
            <button type="submit">Submit</button>
            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
  );
};

export default Login;