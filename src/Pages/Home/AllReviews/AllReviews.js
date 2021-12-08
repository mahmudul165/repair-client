import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./AllReviews.css";
import { Link } from "react-router-dom";
import { Container, Paper, styled } from "@mui/material";
import useReviews from "../../Hook/useReviews";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const AllReviews = () => {
  const [reviews] = useReviews();

  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  console.log("my reviews is ", reviews);
  return (
    <Container>
      <h3 className="auto my-4 text-center text-primary">All Testimonial</h3>
      <section id="testimonial" className="testimonials pt-70 pb-70">
        <div className="container mt-5">
          <div className="text-center ">
            <h4 className="sectionTitle text-warning">
              What Our Clients are Saying?
            </h4>
          </div>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel
                id="customer-testimonoals"
                className="owl-carousel owl-theme"
                {...options}
              >
                {reviews.map((review) => (
                  <>
                    <div key={review._id} className="item">
                      <div className="shadow-effect">
                        <img className="img-circle" src={review.img} />
                        <p>{review.description}</p>
                      </div>
                      <div className="testimonial-name">
                        <h5>{review.name}</h5>
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={parseFloat(review.star)}
                            precision={0.5}
                            readOnly
                          />
                        </Stack>
                      </div>
                    </div>
                  </>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default AllReviews;
