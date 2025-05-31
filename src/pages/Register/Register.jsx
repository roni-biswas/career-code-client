import Lottie from "lottie-react";
import registerAnimation from "../../assets/register.json";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useAuth();

  const handleCreateUserSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // create user
    createUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Successfully Registered!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content gap-24 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={registerAnimation}
            loop={true}
            style={{ width: 300 }}
          />
        </div>
        <div className="card bg-base-100 w-full lg:max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl text-center font-bold">Register now!</h1>
            <form onSubmit={handleCreateUserSubmit} className="fieldset">
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
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
