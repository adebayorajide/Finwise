import launchLogo from "../../assets/Vector2.png";
import "./launch.css";
import { useNavigate } from "react-router-dom";

const Launch = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/login");
  };

  const goToSignupPage = () => {
    navigate("/signup");
  };

  return (
    <div className="launch">
      <section className="launch_logo">
        <img src={launchLogo} alt="" />
      </section>
      <section className="launch_text">
        <p>FinWise</p>
      </section>

      <div className="launch_welcome_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.{" "}
      </div>
      <button
        onClick={() => goToLoginPage()}
        className="bg-finwise-green rounded-b-full rounded-t-full items-center text-center px-32 py-4 text-xl font-semibold leading-6 mt-28"
      >
        Login
      </button>
      <button
        onClick={() => goToSignupPage()}
        className="bg-input-bg rounded-b-full rounded-t-full items-center text-center px-32 py-4 text-xl font-semibold leading-6 mt-2"
      >
        Sign Up
      </button>
      <div className="forgot_password">
        <a href="">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Launch;
