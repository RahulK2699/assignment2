import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

const AllDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setDetail(res.data.data);
      })
      .catch((err) => {
        setDetail({ error: "No data found" });
      }, []);
  });
  return (
    <>
      <div className=" w-[800px] mx-auto flex gap-10 mt-10 items-center">
        <div className=" flex flex-col text-sm">
          <img src={detail.avatar} alt="avatar" />
          <p className="font-medium">{detail.email}</p>
          <p className="font-bold">
            {detail.first_name} {detail.last_name}
          </p>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <div className=" w-40 mx-auto">
        <Button onClick={() => navigate("/")}>Go back to List</Button>
      </div>
    </>
  );
};

export default AllDetail;
