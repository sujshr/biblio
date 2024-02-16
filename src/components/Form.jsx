import React, { useContext, useState } from "react";
import "./FormBody.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// importing use data context
import { UserData } from "../App";

// Popup div component for successful registration
function SuccessDiv() {
  return (
    <div
      id="successDiv"
      className="flex flex-col items-center justify-around text-center"
    >
      <h2 className="font-bold text-3xl">Registration Successful </h2>
      <h3 className="font-semibold text-xl">
        Please navigate back to{" "}
        <Link to="/">
          <p className="text-blue-600">Home page</p>
        </Link>
      </h3>
    </div>
  );
}

// Form component
function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // state to monitor whether form is submitted or not
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { setUser } = useContext(UserData);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <div id="form" className="flex flex-col justify-between">
      <div id="welcomeTexts">
        <h5 className="text-xl font-bold">Get Started for free</h5>
        <h1 className="font-bold text-2xl">Register to Biblio</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid">
        {isSubmitted && <SuccessDiv />}

        {/* firstname field  */}
        <div className="field">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            {...register("fname", {
              required: "Enter First Name",
              minLength: {
                value: 3,
                message: "First Name Must be longer than 3 characters",
              },
              maxLength: {
                value: 30,
                message: "First Name must be shorter than 30 characters",
              },
            })}
          />
          <p className="error">{errors.fname?.message}</p>
        </div>

        {/* last name field  */}
        <div className="field">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            {...register("lname", {
              required: "Enter Last name",
            })}
          />
          <p className="error">{errors.lname?.message}</p>
        </div>

        {/* email field  */}
        {/* span2 class spans the field in 2 grid columns  */}
        <div className="field span2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              required: "Enter e-mail",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        {/* password field  */}
        <div className="field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", {
              required: "Enter Password",
              minLength: {
                value: 10,
                message: "Passowrd Must be longer than 10 characters",
              },
              pattern: {
                value: /^(?=.*[!@#$%^&*])/,
                message: "Password must contain at least one special character",
              },
            })}
          />
          <p className="error">{errors.password?.message}</p>
        </div>

        {/* confirm password field  */}
        <div className="field">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm Your Password",
              validate: (val) => {
                return val === watch("password") || "Passwords Don't match";
              },
            })}
          />
          <p className="error">{errors.confirmPassword?.message}</p>
        </div>

        {/* submit button  */}
        <input type="submit" className="span2" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
