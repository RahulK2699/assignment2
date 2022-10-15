import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { validate } from "../helpers/common";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";

const Login = () => {
  let token = "";
  let fields = { email: "", password: "" };
  let rules = {
    email: "required|email",
    password: "required|min:3|max:15",
  };
  const navigate = useNavigate();
  const [params, setParams] = useState(fields);
  const [errors, setErrors] = useState(fields);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myFunc = validate(params, rules);
    let isValid = Object.keys(myFunc).length;

    if (isValid > 0) setErrors({ ...myFunc });
    else {
      let postData = { ...params };
      axios
        .post("https://reqres.in/api/login", postData)
        .then((res) => {
          token = res?.data?.token;
          localStorage.setItem("token", token);
          navigate("/");
        })
        .catch((err) => {
          setErrors({ backend_error: err.response.data.error });
        });
    }
  };
  console.log(errors);

  return (
    <form className=" flex flex-col gap-4  mx-auto mt-10 w-[500px]">
      <CustomInput
        label={"Email"}
        type="text"
        name={"email"}
        onChange={(e) => handleChange(e)}
        error={errors.email}
      />

      <CustomInput
        label={"Password"}
        type="password"
        name={"password"}
        onChange={(e) => handleChange(e)}
        error={errors.password}
      />
      <p className=" text-xs ">
        Dont have an account{" "}
        <Link to={"/signup"} className="font-bold cursor-pointer">
          Click here
        </Link>
      </p>
      <Button onClick={handleSubmit} error={errors.backend_error}>
        Login
      </Button>
    </form>
  );
};

export default Login;
