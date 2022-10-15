import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { validate } from "../helpers/common";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { form_data } from "../helpers/fields";
import CustomImageCrop from "../components/CustomImageCrop";
import Button from "../components/Button";

const Signup = () => {
  let fields = form_data.signup;
  let rules = form_data.rules.signup;
  const navigate = useNavigate();
  const [params, setParams] = useState(fields);
  const [errors, setErrors] = useState(fields);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name !== "profile_pic") {
      setParams({ ...params, [name]: value });
    } else {
      console.log(e.target.files);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const myFunc = validate(params, rules);
    let isValid = Object.keys(myFunc).length;

    if (isValid > 0) {
      setErrors({ ...myFunc });
    } else {
      let postData = { email: params.email, password: "Rahul123" };
      axios
        .post("https://reqres.in/api/register", postData)
        .then((res) => {
          alert("Registration Successful");
          navigate("/login");
        })
        .catch((err) => {
          setErrors({ backend_error: err.response.data.error });
        });
    }
  };
  console.log(errors);
  return (
    <form className=" flex flex-col gap-4 w-[500px] mx-auto mt-10">
      <CustomInput
        label={"First Name"}
        type="text"
        name={"first_name"}
        onChange={(e) => handleChange(e)}
        error={errors.first_name}
      />

      <CustomInput
        label={"Last Name"}
        type="text"
        name={"last_name"}
        onChange={(e) => handleChange(e)}
        error={errors.last_name}
      />

      <CustomInput
        label={"Address"}
        type="text"
        name={"address"}
        onChange={(e) => handleChange(e)}
        error={errors.address}
      />
      <CustomInput
        label={"Email"}
        type="email"
        name={"email"}
        onChange={(e) => handleChange(e)}
        error={errors.email}
      />

      <CustomInput
        label={"DOB"}
        type="date"
        name={"dob"}
        onChange={(e) => handleChange(e)}
        error={errors.dob}
      />

      {/* <CustomInput
        label={"Profile Picture"}
        type="file"
        name={"profile_pic"}
        onChange={(e) => handleChange(e)}
      /> */}

      {/* <CustomImageCrop /> */}

      <Button onClick={handleSubmit} error={errors.backend_error}>
        Signup
      </Button>
    </form>
  );
};

export default Signup;
