import "./style.css";
import Loginbutton from "./../constants/Loginbutton";
import Signupbutton from "./../constants/Signupbutton";
import google from "../assets/Google.png";
import facebook from "../assets/Facebook.png";

const Login = () => {
  return (
      <div className="login_container1">
          <p className="login_container1_text">Welcome</p>
      <div className="login_container2">
        <div className="login_content">
          <section className="user_email">
            <p className="user_email_text">Username Or Email</p>
            <input
              placeholder="example@example.com"
              className="user_email_input"
            />
          </section>

          <section className="password">
            <p className="password_text">Password</p>
            <input
              placeholder="example@example.com"
              className="password_input"
            />
          </section>

          <Loginbutton />
          <p className="forgot_text">Forgot Password?</p>
          <Signupbutton />

          <section className="login_footer">
            <p1>
              Use <a href="">Fingerprint</a> To Access
            </p1>
            <p2>or sign up with</p2>
            <span className="social">
              <img src={google} alt="" className="social_google"/>
              <img src={facebook} alt="" className="socila_facebook"/>
            </span>
            <p3>
              Don’t have an account? <a href="">Sign Up</a>{" "}
            </p3>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
