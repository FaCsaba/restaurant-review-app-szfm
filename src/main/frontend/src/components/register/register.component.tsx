const Register = () => {
    return (
      <div className="wrapper">
          <form>
              <h1>Register</h1>
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
              <label>Password again</label>
              <div className="input-box">
                  <input type="password" placeholder="Password again" required />
                  <i className="bi bi-shield-lock"></i>
              </div>
              <button type="submit">Submit</button>
              <div className="register-link">
                  <p>Already have an account? <a href="#">Sign in</a></p>
              </div>
          </form>
      </div>
    );
  };
  
  export default Register;