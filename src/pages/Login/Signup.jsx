import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.fName.value;
    const lName = form.lName.value;
    const email = form.email.value;
    const password = form.password.value;
    const cPassword = form.cPassword.value;

    if (password === cPassword) {
      const user = {
        name: fName + lName,
        email,
        password,
      };
      console.log(user);
    } else {
      console.log("Password not match");
    }
  };
  return (
    <div className="flex flex-col mx-auto justify-center items-center w-full">
      <h1 className="font-bold text-3xl">Create An Account</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-3 border border-black gap-2 w-1/2 mx-auto"
      >
        <input
          placeholder="First Name"
          className="input input-bordered"
          type="text"
          name="fName"
        />
        <input
          placeholder="Last Name"
          className="input input-bordered"
          type="text"
          name="lName"
        />
        <input
          placeholder="email"
          className="input input-bordered"
          type="email"
          name="email"
        />
        <input
          placeholder="password"
          className="input input-bordered"
          type="password"
          name="password"
        />
        <input
          placeholder="Confirm password"
          className="input input-bordered"
          type="password"
          name="cPassword"
        />
        <input className="btn btn-primary" type="submit" value="sign up" />
        <Link to="/login" className="btn btn-error">
          have account Login please
        </Link>
      </form>
    </div>
  );
};

export default Signup;
