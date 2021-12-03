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
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Services = () => {
  const [services] = useServices();
  const itemService = services.filter((item) => item.id <= 6);
  return (
    <Container>
      <h3 className="auto my-4 text-center">All Services that We Provide</h3>
      <Grid container spacing={2}>
        {itemService.map((service) => (
          <>
            {
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    // height="140"
                    image="https://i.ibb.co/M1r4p4R/Open-Peeps-Sitting.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {service.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.username}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">{service.phone}</Button>
                    <Button size="small">Learn More</Button>
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
