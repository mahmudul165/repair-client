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

import useServices from "../../Hook/useServices";
// import { NavLink } from "react-router-dom";
// import AwesomeButton from "react-awesome-button";
// import "react-awesome-button/dist/themes/theme-blue.css";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ExploreServices = () => {
  const [services] = useServices();
  return (
    <Container>
      <h3 className="auto my-4 text-center text-primary">
        Explore All Services
      </h3>
      <Grid container spacing={2} my={2}>
        {services.map((service) => (
          <>
            <Grid key={service._id} item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={service.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <i class="fas fa-dollar-sign"></i> {service.price}
                  </Button>

                  <Link
                    style={{ textAlign: "center", textDecoration: "none" }}
                    to={`/order/${service._id}`}
                  >
                    <Button size="small">Order Now</Button>
                  </Link>
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
