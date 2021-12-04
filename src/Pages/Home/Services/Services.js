import React from "react";
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

  const itemService = services.splice(0, 6);

  return (
    <Container>
      <h3 className="auto my-4 text-center">All Services that We Provide</h3>
      <Grid container my={2} spacing={2}>
        {itemService.map((service) => (
          <>
            {
              <Grid item xs={12} md={4}>
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
                    {/* <NavLink to="/order" style={{ TextDecoder: "none" }}>
                      <Button variation="primary" size="small">
                        Order Now
                      </Button>
                    </NavLink> */}
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
            }
          </>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
