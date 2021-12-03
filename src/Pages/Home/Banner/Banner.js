import React from "react";
import Carousel from "react-material-ui-carousel";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { AwesomeButton } from "react-awesome-button";

import "react-awesome-button/dist/themes/theme-blue.css";
import { NavLink } from "react-router-dom";
const Banner = () => {
  var items = [
    {
      img: "https://i.postimg.cc/T3cb0PWr/Beep-Beep-Bicycle.png",
      name: "Love every ride",
      description:
        "Four wheels move the body, and two wheels move the soul. If you have never owned one, you will never understand. A bike on the road is worth two in the shed.",
    },
    {
      img: "https://i.ibb.co/M1r4p4R/Open-Peeps-Sitting.png",
      name: "A pollution free ride",
      description:
        "Always back your scooter into the curb and sit where you can see it. The sound of the throttle makes me fall in love with our bike.  King of the bikes.",
    },
    {
      img: "https://i.ibb.co/kJD93Zk/Dayflow-Riding.png",
      name: "Ride Made Better",
      description:
        "Believe in your cycle, and it will lead your way. The best rides happen on two wheels. Ride it like a pro it’s not just riding, it’s a feeling. Ride and live today.",
    },
  ];

  return (
    <Carousel className="container" sx={{ width: "100%", height: "500px" }}>
      {items.map((item, i) => (
        <>
          {/* <Paper key={i}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <Button className="CheckButton">Check it out!</Button>         
          </Paper> */}
          <Container>
            <Grid container key={i} my={4}>
              <Grid
                xs={12}
                md={6}
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <div
                  className=" "
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <img
                    width="350px"
                    height="350px"
                    sx={{ ml: 4 }}
                    className="text-center"
                    src={item.img}
                    alt=""
                  />
                </div>
              </Grid>
              <Grid xs={12} md={6} sx={{ py: 2 }} className="text-center">
                <Typography
                  variant="h3"
                  sx={{
                    color: "purple",
                    fontWeight: 800,
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{ fontWeight: "medium", m: 1 }}
                  my={3}
                  py={2}
                  variant="body"
                  component="div"
                >
                  {item.description}
                </Typography>

                <NavLink to="/exploreServices">
                  <Typography
                    my={1}
                    py={2}
                    style={{ textAlign: "center" }}
                    component="div"
                  >
                    <AwesomeButton
                      className="aws-btn"
                      type="secondary"
                      size="large"
                    >
                      Explore
                    </AwesomeButton>
                  </Typography>
                </NavLink>
              </Grid>
            </Grid>
          </Container>
        </>
      ))}
    </Carousel>
  );
};

export default Banner;
{
  /* <img src="https://i.ibb.co/R48cYc5/Vector-illustration-of-a-modern-bicycle-in-the-style-of-engraving.jpg" alt="Vector-illustration-of-a-modern-bicycle-in-the-style-of-engraving" border="0">
<img src="https://i.ibb.co/kJD93Zk/Dayflow-Riding.png" alt="Dayflow-Riding" border="0">
<img src="https://i.ibb.co/M1r4p4R/Open-Peeps-Sitting.png" alt="Open-Peeps-Sitting" border="0">
<img src="https://i.ibb.co/nLNnm0P/c-2.jpg" alt="c-2" border="0"></img> */
}
