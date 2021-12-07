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
import { NavLink } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import axios from "axios";
import { Alert } from "bootstrap";
import { animated, useSpring } from "react-spring";
// import AwesomeButton from "react-awesome-button";
// import "react-awesome-button/dist/themes/theme-blue.css";
// import { NavLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ManageProduct = () => {
  const [services, setServices] = useServices();

  // delete product

  const handleDelete = (id) => {
    alert("Are You Sure To DELETE this ORDER");

    axios
      .delete(`http://localhost:5000/services/${id}`, services)
      .then((res) => {
        const remaining = services.filter((service) => service._id !== id);
        setServices(remaining);
      });
  };
  // react animation

  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  });
  return (
    <Container className="container">
      <animated.div style={styles}>
        <h4 className="text-warning  text-center my-3 py-2">
          Manage All Services
        </h4>
      </animated.div>
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
                <CardActions sx={{ textAlign: "center" }}>
                  <Button size="small">
                    <span className="mx-1">
                      <i class="fas fa-dollar-sign"></i>
                    </span>
                    {service.price}
                  </Button>
                  <Typography
                    my={1}
                    mx={2}
                    py={2}
                    style={{ textAlign: "center" }}
                    component="div"
                    onClick={() => handleDelete(service._id)}
                  >
                    <AwesomeButton
                      className="aws-btn-2"
                      type="secondary"
                      size="small"
                    >
                      Delete
                    </AwesomeButton>
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </Container>
  );
};

export default ManageProduct;
