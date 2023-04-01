import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signUpImg from "../assets/images/login/login.svg";
import { AuthContext } from "../context/AuthProvider";
const SignUp = () => {
  const { createUser, addUserName } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        addUserName(name);
        const user = result.user;
        // JWT token
        const currentUser = {
          email: user.email,
        };
        fetch("https://car-mechanic-server-coral.vercel.app/JWT", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const token = data.token;
            localStorage.setItem("genius-token", token);
            navigate(from, { replace: true });
          });

        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero my-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign up now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </div>
            <p>
              Already have an account ?{" "}
              <Link to="/login" className="text-orange-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
