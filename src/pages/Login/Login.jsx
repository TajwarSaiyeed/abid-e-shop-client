import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = {
      email,
      password,
    };

    console.log(user);
  };
  return (
    <div className="flex flex-col mx-auto justify-center items-center w-full">
      <h1 className="font-bold text-3xl">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 p-3 border border-black w-1/2 mx-auto"
      >
        <input
          placeholder="email"
          className="input input-bordered"
          type="email"
          name="email"
        />
        <input
          className="input input-bordered"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input className="btn btn-primary" type="submit" value="Login" />
        <Link to="/signup" className="btn btn-error">
          First Signup Please
        </Link>
      </form>
    </div>
  );
};

export default Login;
