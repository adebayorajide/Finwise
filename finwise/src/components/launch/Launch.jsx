import launchLogo from "../../assets/chart.png";
import "./launch.css";
import Login from "../Login";
import Signup from "../Signup";

const Launch = () => {
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
      <Login />
      <Signup />
      <div className="forgot_password">
        <a href="">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Launch;
