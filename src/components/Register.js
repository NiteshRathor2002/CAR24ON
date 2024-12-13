import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Register.css";

function Register() {
  const [islogin, setislogin] = useState(true);

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="form-container d-flex justify-content-center flex-column rounded-3">
          {/* Login and Signup Buttons */}
          <div className="p-3 d-flex">
            <button
              className={islogin ? "log-btn-active" : ""}
              onClick={() => setislogin(true)}
              id="btns"
            >
              Login
            </button>
            <button
              className={!islogin ? "log-btn-active" : ""}
              onClick={() => setislogin(false)}
              id="btnss"
            >
              Signup
            </button>
          </div>

          {/* Login Form */}
          {islogin ? (
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values, { resetForm }) => {
                console.table(values);
                alert("Login successfully");
                resetForm(); // Clears the form
              }}
            >
              <Form>
                <h2 className="form-title text-center mt-2">Login Form</h2>
                <label htmlFor="email">Email:</label>
                <Field
                  className="input-group"
                  placeholder="abc@gmail.com"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                />
                <br />

                <label htmlFor="password">Password:</label>
                <Field
                  className="input-group"
                  placeholder="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  required
                />
                <br />

                <div className="text-end mb-2">
                  <a href="#" className="text-decoration-none">
                    Forgot password
                  </a>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary text-center w-100 login"
                  >
                    Submit
                  </button>
                </div>
                <p className="mt-2 text-center">
                  Not a Member?{" "}
                  <a
                    className="text-decoration-none anchor"
                    onClick={() => setislogin(false)}
                  >
                    Signup Now
                  </a>
                </p>
              </Form>
            </Formik>
          ) : (
            // Signup Form
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                password: "",
                confirm: "",
              }}
              onSubmit={(values, { resetForm }) => {
                console.table(values);
                alert("Signup successfully");
                resetForm(); // Clears the form
              }}
            >
              <Form>
                <h2 className="form-title text-center mt-2">Signup Form</h2>
                <label htmlFor="name">Name:</label>
                <Field
                  className="input-group"
                  placeholder="John"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
                <br />

                <label htmlFor="email">Email:</label>
                <Field
                  className="input-group"
                  placeholder="abc@gmail.com"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                />
                <br />

                <label htmlFor="phone">Phone Number:</label>
                <Field
                  className="input-group"
                  placeholder="Enter phone number"
                  name="phone"
                  type="text"
                  autoComplete="tel"
                  required
                />
                <br />

                <label htmlFor="password">Password:</label>
                <Field
                  className="input-group"
                  placeholder="Password"
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  required
                />
                <br />

                <label htmlFor="confirm">Confirm Password:</label>
                <Field
                  className="input-group"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirm"
                  autoComplete="new-password"
                  required
                />
                <br />

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary text-center w-100"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          )}
        </div>
      </div>
    </>
  );
}

export default Register;
