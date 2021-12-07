import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

import { Col, Container, Image, Row } from "react-bootstrap";
import useAuth from "../Hook/useAuth";

const Order = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const { Id } = useParams();
  const [singleUser, setsingleUser] = useState({});
  const [order, setorder] = useState({});
  useEffect(async () => {
    await fetch(`http://localhost:5000/services/${Id}`)
      .then((res) => res.json())
      .then((data) => setsingleUser(data));
  }, [singleUser]);
  const axios = require("axios").default;
  const onSubmit = async (data) => {
    console.log(
      "data from singleuser",
      ((data.id = singleUser._id), (data.order_name = singleUser.name))
    );
    await console.log("my order data", data);
    axios
      .post("http://localhost:5000/orders", {
        data,
        status: "pending",
      })
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Data added successfully");
          reset();
        }
      });
  };
  return (
    <>
      <div height="350px" className="m-auto mb-5 pb-4 my-4">
        <Image
          src="https://i.ibb.co/5G23t1c/undraw-bug-fixing-oc7a.png"
          alt=""
          className="w-100  "
          height="350px"
        />
      </div>
      <div>
        <div className="container text-center  ml-2  ">
          <div className="bg-secondary w-75 my-3 py-3 pb-4 rounded m-auto  justify-content-center">
            <form className="mx-2" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group   ">
                <input
                  type="text"
                  className="form-control   p-2 my-2"
                  placeholder="Service Name"
                  defaultValue={singleUser._id}
                  {...register("id")}
                />
                <input
                  type="text"
                  className="form-control p-2 my-2"
                  placeholder="Full Name"
                  defaultValue={singleUser.name}
                  {...register("order_name")}
                />
                <input
                  type="text"
                  className="form-control p-2 my-2"
                  placeholder="Full Name"
                  defaultValue={user?.displayName}
                  {...register("customer_name")}
                />
              </div>
              <div className="form-group">
                <input
                  name="phone"
                  type="text"
                  className="form-control p-2 my-2"
                  placeholder="Phone No."
                  {...register("phone")}
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="text"
                  className="form-control p-2 my-2"
                  placeholder="Email Address"
                  value={user.email}
                  {...register("email")}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  type="text"
                  className="form-control p-2 my-2"
                  rows="4"
                  placeholder="Message"
                  {...register("message")}
                ></textarea>
              </div>
              <div className=" text-center m-auto">
                <input
                  className=" text-center m-auto my-2 p-2 btn btn-warning btn-block  text-white"
                  type="submit"
                  value="Request Order"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
