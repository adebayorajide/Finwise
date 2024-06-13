import "./style.css";
import google from "../assets/Google.png";
import facebook from "../assets/Facebook.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goToSignupPage = () => {
    navigate("/signup");
  };
  return (
    <div className="flex flex-col justify-center items-center bg-finwise-green h-ful w-full ">
      <p className="my-14 mx-0 text-6xl font-semibold">Welcome</p>
      <div className="flex flex-col justify-center w-full h-full bg-finwise-white border-radius">
        <div className="flex flex-col justify-center items-center w-auto mt-8">
          <section className="user_email">
            <p className="text-xl font-semibold leading-2 mb-5">
              Username Or Email
            </p>
            <input placeholder="example@example.com" className="input" />
          </section>

          <section className="password">
            <p className="text-xl font-semibold leading-2 mb-5">Password</p>
            <input placeholder="example@example.com" className="input" />
          </section>

          <button className="login_button">Login</button>
          <p className="forgot_text">Forgot Password?</p>

          <button onClick={() => goToSignupPage()} className="signup_button">
            Sign up
          </button>

          <section className="login_footer">
            <p1>
              Use <a href="">Fingerprint</a> To Access
            </p1>
            <p2>or sign up with</p2>
            <span className="mt-0.5 mb-10 flex flex-row justify-center items-center ">
              <img src={google} alt="" className="mr-8" />
              <img src={facebook} alt="" className="socila_facebook" />
            </span>
            <p3>
              Don’t have an account?{" "}
              <a href="" onClick={() => goToSignupPage()}>
                Sign Up
              </a>{" "}
            </p3>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
