import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const drawerWidth = 170;

function Admin(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <NavLink style={{ textDecoration: "none" }} to="/manageAllOrder">
        <Button
          sx={{
            my: 2,
            ml: 1,
            color: "secondary.main",
            fw: 800,
            display: "block",
          }}
        >
          Manage All Order
        </Button>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} to="/addProduct">
        <Button
          sx={{
            my: 2,
            ml: 1,
            color: "secondary.main",
            display: "block",
          }}
        >
          Add Product
        </Button>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} to="/createAdmin">
        <Button
          sx={{
            my: 2,
            ml: 1,
            color: "secondary.main",
            fw: 800,
            display: "block",
          }}
        >
          Create Admin
        </Button>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} to="/logout">
        <Button
          sx={{
            my: 2,
            ml: 1,
            color: "secondary.main",
            fw: 800,
            display: "block",
          }}
        >
          Logout
        </Button>
      </NavLink>
      {/* "Pay", "MyOrder", "Review", "Logout" */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "purple  ",
          color: "goldenrod",
          textAlign: "cenetr",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ textAlign: "center", margin: "auto" }}
          >
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Admin
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus.
        </Typography>
      </Box>
    </Box>
  );
}

Admin.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Admin;
