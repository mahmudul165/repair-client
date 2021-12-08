import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../Contract/Contract.css";
const Contract = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="contract-img  text-primary my-3 ">
      <div className="container m-auto     ">
        <div className="text-center p-4 m-3">
          <h4 className="p-3">CONTACT US</h4>
          <h4 className="text-warning">Always Connect With Us</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3  ">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mb-3  ">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="your subject"
              {...register("subject", { required: true })}
            />
            {errors.subject && <span>This field is required</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Describe Your issue
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("description")}
            ></textarea>
          </div>
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contract;
