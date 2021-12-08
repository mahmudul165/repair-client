import React, { useEffect, useState } from "react";
import "./Services.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
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
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Services = () => {
  const [services] = useServices();
  const [state, setstate] = useState([]);
  const itemService = services.splice(0, 6);
  //console.log("item is slice of", itemServices);
  //const itemServices = () => services.splice(0, 6);

  // const item = async () => {
  //   const items = await itemServices();
  //   await console.log("item is below", items);
  //   await setstate(items);
  // };
  // item();
  // function
  // useEffect(() => {
  //   function fetchMyAPI() {
  //     let itemServices = services.splice(0, 6);
  //     console.log("item is slice of", itemServices);
  //     setstate(itemServices);
  //   }
  //   fetchMyAPI();
  // }, [state]);

  // console.log("item is slice of", state);
  // console.log("length is", state.length);

  //console.log("item is slice of", itemService);

  return (
    <Container>
      <h4 className="auto my-4 text-center text-primary">
        All Services that We Provide
      </h4>
      <Grid id="demo" container my={2} spacing={2}>
        {itemService.map((service) => (
          <>
            <Grid key={service._id} item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  // height="140"
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
                    <i class="fas fa-dollar-sign"></i>
                    {service.price}
                  </Button>
                  <NavLink to={`/order/${service._id}`}>
                    <Typography
                      my={1}
                      py={2}
                      style={{ textAlign: "center" }}
                      component="div"
                    >
                      <AwesomeButton
                        className="aws-btn-2"
                        type="secondary"
                        size="medium"
                      >
                        Order Now
                      </AwesomeButton>
                    </Typography>
                  </NavLink>
                </CardActions>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;

// code
{
  /* <>
<Grid key={service._id} item xs={12} md={4}>
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      // height="140"
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
        <i class="fas fa-dollar-sign"></i>
        {service.price}
      </Button>
      <NavLink to="/order">
        <Typography
          my={1}
          py={2}
          style={{ textAlign: "center" }}
          component="div"
        >
          <AwesomeButton
            className="aws-btn-2"
            type="secondary"
            size="medium"
          >
            Order Now
          </AwesomeButton>
        </Typography>
      </NavLink>
    </CardActions>
  </Card>
</Grid>
</> */
}
