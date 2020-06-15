import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./SignIn.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    errors,
  } = useForm();
  const history = useHistory();
  const [name, setName] = useState("");

  const [email, setEmail] = useState(
    ""
  );
  const [
    password,
    setPassword,
  ] = useState("");
  const [about, setAbout] = useState(
    ""
  );
  const RegExName = /^[a-z][a-z\s](?=.{2,})*$/;
  const RegExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const RegExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const postData = () => {
    if (
      RegExName.test(name) &&
      RegExEmail.test(email) &&
      RegExPassword.test(password)
    ) {
      fetch("/Register", {
        method: "post",
        headers: {
          "content-type":
            "application/json",
        },
        body: JSON.stringify({
          name,
          password,
          email,
          about,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.log("no");
            M.toast({
              html: data.error,
              classes: "red",
            });
          } else {
            M.toast({
              html: data.message,
              classes: "rounded blue",
            });
            history.push("/SignIn");
          }
        });
    }
  };
  // const onSubmit = (e) => {
  //   postData(e);
  // };

  return (
    <div className="card auth-card center input-field">
      <form
        className="form"
        onSubmit={handleSubmit(
          postData()
        )}
      >
        <h2>Super Chefs</h2>
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={name}
          ref={register({
            required: true,
            minLength: 2,
          })}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {errors.name &&
          errors.name.type ===
            "required" && (
            <span
              style={{ color: "red" }}
            >
              this field is required !
            </span>
          )}
        {errors.name &&
          errors.name.type ===
            "minLength" && (
            <span
              style={{ color: "red" }}
            >
              Minimum string length is 2
              characters !
            </span>
          )}

        <input
          name="email"
          placeholder="Email"
          type="text"
          value={email}
          ref={register({
            required: true,
          })}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors.email &&
          errors.email.type ===
            "required" && (
            <span
              style={{ color: "red" }}
            >
              this field is required !
            </span>
          )}
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          ref={register({
            required: true,
            minLength: 8,
          })}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errors.password &&
          errors.password.type ===
            "required" && (
            <span
              style={{ color: "red" }}
            >
              this field is required !
            </span>
          )}
        {errors.password &&
          errors.password.type ===
            "minLength" && (
            <span
              style={{ color: "red" }}
            >
              Password must have at
              least 8 characters !
            </span>
          )}
        <textarea
          name="about"
          placeholder="Tell us about you chef"
          ref={register({
            required: true,
          })}
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
        />
        {errors.about &&
          errors.about.type ===
            "required" && (
            <span
              style={{ color: "red" }}
            >
              this field is required !
            </span>
          )}

        <button
          type="submit"
          className="btn waves-effect waves-light"
        >
          {" "}
          Register
        </button>
        <Link to="/SignIn">
          <h6>
            Already have an account?
          </h6>
        </Link>
      </form>
    </div>
  );
};

export default Register;
