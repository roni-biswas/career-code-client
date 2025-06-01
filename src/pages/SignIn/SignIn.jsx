import Lottie from "lottie-react";
import signInAnimation from "../../assets/signIn.json";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import SocialLogin from "../Shared/SocialLogin";

const SignIn = () => {
  const { user, signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state || "/";

  if (user) {
    return navigate(location.state || "/");
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // sign in user
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Sign-In User!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate(location.state || "/");
        }
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={signInAnimation}
            loop={true}
            style={{ width: "300px" }}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl text-center font-bold">Sing-In now!</h1>
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign In</button>
            </form>
            <SocialLogin from={from} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
