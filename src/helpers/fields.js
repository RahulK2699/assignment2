export const form_data = {
  signup: {
    first_name: "",
    last_name: "",
    address: "",
    email: "",
    dob: "",
    profile_pic: "",
  },
  rules: {
    signup: {
      first_name: "required|max:20",
      last_name: "required|max:30",
      address: "required|max:100",
      email: "required|email",
    },
  },
};
