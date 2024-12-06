import "./login.component.css";



const Login = () => {
  return (
    <div className="wrapper">
        <form>
            <h1>Login</h1>
            <label>Username</label>
            <div className="input-box">
                <input type="text" placeholder="Username" required />
                <i className="bi bi-person-fill"></i>
            </div>
            <label>Password</label>
            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <i className="bi bi-shield-lock"></i>
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