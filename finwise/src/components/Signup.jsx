import "./style.css";
// import style from '../style';
import Signupbutton from './../constants/Signupbutton';

const Signup = () => {
  return (
    <div className="flex items-center justify-center flex-col w-auto h-full bg-finwise-green">
        <p className="my-16 text-6xl font-semibold">Create Account</p>
        <div className="flex flex-col justify-center bg-finwise-white h-full w-full border-radius ">
            <div className="flex flex-col w-auto justify-center items-center ">
                <div className="flex flex-row m-20 space-x-28">
                    <div className="fullname">
                    <p className="text-x1 font-semibold leading-6 mb-2.5">Fullname</p>
                    <input
                    placeholder="John Doe"
                    className="bg-input-bg rounded-3xl input_width h-10 text-base capitalize font-normal font-sans leading-4 py-8 px-11"
                    />
                    </div>
            
                    <div className="email">
                    <p className="user_email_text">Email</p>
                    <input
                    placeholder="example@example.com"
                    className="bg-input-bg rounded-3xl input_width h-10 text-base capitalize font-normal font-sans leading-4 py-8 px-11"
                    />
                    </div>
                </div>

                <div className="flex flex-row margin-top-off space-x-28">
                    <section className="UOE">
                    <p className="mobile_number_text">Mobile Number</p>
                    <input
                        placeholder="+ 123 456 789"
                        className="bg-input-bg rounded-3xl input_width h-10 text-base capitalize font-normal font-sans leading-4 py-8 px-11"
                    />
                    </section>
            
                    <section className="DOB">
                    <p className="user_email_text">Date Of Birth</p>
                    <input
                        placeholder="DD / MM / YY"
                        className="bg-input-bg rounded-3xl input_width h-10 text-base capitalize font-normal font-sans leading-4 py-8 px-11"
                    />
                    </section>
                </div>

                <div className="flex flex-row margin-top-off space-x-28">
                    <section className="password">
                    <p className="user_email_text">Password</p>
                    <input
                        placeholder="***********"
                        className="bg-input-bg rounded-3xl input_width h-10 text-base capitalize font-normal font-sans leading-4 py-8 px-11"
                    />
                    </section>
            
                    <section className="COP">
                    <p className="user_email_text">Confirm Password</p>
                    <input
                        placeholder="***********"
                        className="bg-input-bg rounded-3xl input_width h-10 text-base capitalize font-normal font-sans leading-4 py-8 px-11"
                    />
                    </section>
                  </div>
                  
                  <div>
                    <p>By continuing, you agree to <span className="font-bold">Terms of Use</span> and <span className="font-bold">Privacy Policy.</span></p>
                  </div>

                  <div className="m-8">
                    <Signupbutton className="text-green-900"/>
                  </div>

                  <section className="mb-6">Already have an account <a href="" className="text-blue-900">Log in</a></section>
            
            </div>
        </div>
    </div>
  );
};

export default Signup;
