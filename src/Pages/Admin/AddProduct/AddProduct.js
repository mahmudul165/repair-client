import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useServices from "../../Hook/useServices";

const AddProduct = () => {
  const [services] = useServices();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const id = 0;
  const axios = require("axios").default;
  const onSubmit = (data) => {
    console.log(data);
    axios.post(`http://localhost:5000/services`, data).then((res) => {
      // /${(id = services.length + 1)}
      console.log(res);
      if (res.data.insertedId) {
        alert("Data added successfully");
        reset();
      }
    });
  };
  return (
    <Row>
      <Col>
        <Card.Body>
          <h3>
            Add <span className="text-warning">Services Offer</span>
          </h3>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group
              as={Row}
              className=" mt-3 mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Type Your Offer Name"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label column sm="2">
                description
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  {...register("description")}
                  as="textarea"
                  rows={3}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                price
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  {...register("price")}
                  type="number"
                  placeholder="price"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                image
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  {...register("img")}
                  type="text"
                  placeholder="image url"
                />
              </Col>
            </Form.Group>
            {errors.exampleRequired && <span>This field is required</span>}
            <input className="btn btn-success" type="submit" />
          </Form>
        </Card.Body>
      </Col>
    </Row>
  );
};

export default AddProduct;
