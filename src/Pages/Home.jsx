import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUserList();
  }, []);
  const getUserList = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setListData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="grid grid-cols-2 w-[500px] m-auto">
      {listData.map((item) => (
        <div key={item.id} className=" m-5 w-fit ">
          <img className=" cursor-pointer" src={item?.avatar} alt="profile" />
          <p className=" text-center">
            {item?.first_name} {item?.last_name}
          </p>
          <div className=" flex justify-center items-center">
            <Link
              to={`/${item.id}`}
              className=" px-3 py-1 border border-red-500 rounded-lg text-xs mt-2"
            >
              All Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
