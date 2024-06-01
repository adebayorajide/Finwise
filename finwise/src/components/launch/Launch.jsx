import launchLogo from "../../assets/Vector2.png";
import "./launch.css";
import Loginbutton from "../../constants/Loginbutton";
import Signupbutton from "../../constants/Signupbutton";

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
      <Loginbutton />
      <Signupbutton />
      <div className="forgot_password">
        <a href="">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Launch;
