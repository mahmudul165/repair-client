import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import useReviews from "../../Hook/useReviews";

const Review = () => {
  const { user } = useAuth();
  const [reviews] = useReviews();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const id = 0;
  const axios = require("axios").default;
  const onSubmit = (data) => {
    console.log("data from singleuser", (data.name = user.displayName));
    console.log("my data review", data);
    axios
      .post(`https://shielded-forest-05561.herokuapp.com/reviews`, data)
      .then((res) => {
        // /${(id = services.length + 1)}
        console.log(res);
        if (res.data.insertedId) {
          alert("Data added successfully");
          reset();
        }
      });
  };
  return (
    <Container>
      <Row className="container p-2 m-2">
        <Col>
          <Card.Body>
            <h3 className="text-center">
              Please Add <span className="text-warning"> Your Review</span>
            </h3>

            <Form
              className="w-75 text-center m-auto p-2 m-2"
              onSubmit={handleSubmit(onSubmit)}
            >
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
                    disabled
                    {...register("name")}
                    type="text"
                    placeholder="Type Your Name"
                    defaultValue={user.displayName}
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
                  star
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    {...register("star")}
                    type="text"
                    placeholder="give star number (0-5)"
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
                    placeholder="your profile picture"
                    defaultValue={user.photoURL}
                  />
                </Col>
              </Form.Group>
              {errors.exampleRequired && <span>This field is required</span>}
              <input className="btn btn-success" type="submit" />
            </Form>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default Review;
