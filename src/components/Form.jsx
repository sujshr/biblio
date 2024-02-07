import React, { useState } from "react";
import "./FormBody.css";
import { useForm } from "react-hook-form";

function SuccessDiv() {
  return (
    <div id="successDiv">
      <h2>Registration Successful </h2>
      <h3>Please navigate back to home page</h3>
    </div>
  );
}
function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitted(true);
  };

  return (
    <div id="form">
      <div id="welcomeTexts">
        <h5>Get Started for free</h5>
        <h1>Register to Biblio</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {isSubmitted && <SuccessDiv />}
        <div className="field">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            {...register("fname", {
              required: "Enter First Name",
            })}
          />
          <p className="error">{errors.fname?.message}</p>
        </div>

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

        <div className="field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", {
              required: "Enter Password",
              minLength: {
                value: 4,
                message: "Passowrd Must be longer than 4 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must be shorter than 20 characters",
              },
            })}
          />
          <p className="error">{errors.password?.message}</p>
        </div>

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

        <input type="submit" className="span2" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
