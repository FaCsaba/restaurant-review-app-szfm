import { FaUser, FaLock } from "react-icons/fa";

const Register = () => {
    return (
      <div className="wrapper">
          <form>
              <h1>Register</h1>
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
              <label>Password again</label>
              <div className="input-box">
                  <input type="password" placeholder="Password again" required />
                  <FaLock className="icon" />
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