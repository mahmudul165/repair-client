import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

// import { NavLink } from "react-router-dom";
// import AwesomeButton from "react-awesome-button";
// import "react-awesome-button/dist/themes/theme-blue.css";
import { Link } from "react-router-dom";
import useReviews from "../../Hook/useReviews";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Explorereviews = () => {
  const [reviews] = useReviews();
  return (
    <Container>
      <h3 className="auto my-4 text-center">All Testimonial</h3>
      <Grid container spacing={2} my={2}>
        {reviews.map((review) => (
          <>
            <Grid key={review._id} item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={review.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {review.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {review.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <i class="fas fa-dollar-sign"></i> {review.price}
                  </Button>

                  {/* <Link
                    style={{ textAlign: "center", textDecoration: "none" }}
                    to={`/order/${service._id}`}
                  >
                    <Button size="small">Order Now</Button>
                  </Link> */}
                  {/* {`/order/${_id}`} */}
                </CardActions>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </Container>
  );
};

export default ExploreServices;
