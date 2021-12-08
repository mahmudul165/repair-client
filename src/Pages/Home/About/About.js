import * as React from "react";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Image } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <h4 className="auto text-center my-4 fw-500 text-warning">
        Why Choose Us For Repair ?
      </h4>
      <Grid container spacing={1} my={4} sx={{ alignItems: "center" }}>
        <Grid
          item
          className="text-center"
          xs={12}
          md={6}
          // sx={{
          //   alignItems: "center",
          //   alignContent: "center",
          //   justifyContent: "cenetr",
          //   justifyItems: "cenetr",
          //   margin: "auto",
          // }}
        >
          <img
            src="https://i.postimg.cc/x1zh7WPj/cycle-Repair.png"
            alt="repairCycle"
            className="text-center auto"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Container className="py-3 m-2">
            <Typography variant="body1" gutterBottom>
              we'll provide you with the same qualified expertise you will find
              any of these stores with an added advantage of serving you at your
              doorstep. We understand people live busy lives, it's not always
              convenient to drop off your bicycle at a workshop and schedule a
              time to collect it, addressing this primary concern we offer easy,
              convenient and reliable service just a click or phone call away!
              Happy cycling!
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
              WE LOVE WHAT WE DO
            </Typography>
            <Grid
              container
              my={3}
              item
              sx={{ alignItems: "center" }}
              xs={12}
              md={12}
              p={2}
              m={1}
            >
              <Grid item xs={6} md={2}>
                <img
                  width="100px"
                  height="100px"
                  className="m-2 p-2"
                  src="https://www.fixmycycle.com/images/ser-1.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={6} my={2} md={10}>
                <Box sx={{ mx: 3 }}>
                  <Typography variant="h5" gutterBottom component="div">
                    service
                  </Typography>

                  <Typography variant="subtitle1" gutterBottom component="div">
                    From residential to corporate bookings, clubs & event
                    services, we have you covered.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={6} my={2} md={2}>
                <img
                  width="100px"
                  height="100px"
                  className="m-2 p-2 "
                  src="https://www.fixmycycle.com/images/ser-2.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={6} md={10}>
                <Box sx={{ mx: 3 }}>
                  <Typography variant="h5" gutterBottom component="div">
                    Value
                  </Typography>

                  <Typography variant="subtitle1" gutterBottom component="div">
                    Certified Technicians who are at your doorstep at your
                    convenient time
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={2}>
                <img
                  width="100px"
                  height="100px"
                  className="m-2 p-2"
                  src="https://www.fixmycycle.com/images/ser-3.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={6} md={10}>
                <Box sx={{ mx: 3 }}>
                  <Typography variant="h5" gutterBottom component="div">
                    Intrigity
                  </Typography>

                  <Typography variant="subtitle1" gutterBottom component="div">
                    With competitive rates and fast service , we'll give you the
                    best value for your time and money.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
