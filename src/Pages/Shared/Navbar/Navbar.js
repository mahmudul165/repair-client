import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
const pages = [
  "Home",
  "About",
  "Service",
  "Blogs",
  "Contact",
  "Review",
  "Dashboard",
  "Admin",
  "Login",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, isLoading, authError, registerUser, loginWithGoogle, logout } =
    useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      sx={{ backgroundColor: "white", color: "secondary.main", fs: 500 }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink style={{ textDecoration: "none" }} to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Bicycleo Repair
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, mr: 4, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, ml: 4, display: { xs: "none", md: "flex" } }}>
            <NavLink style={{ textDecoration: "none" }} to="/home">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  ml: 4,
                  color: "secondary.main",
                  fw: 800,
                  display: "block",
                }}
              >
                Home
              </Button>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/about">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  ml: 4,
                  color: "secondary.main",
                  fw: 800,
                  display: "block",
                }}
              >
                About
              </Button>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/services">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  ml: 4,
                  color: "secondary.main",
                  fw: 800,
                  display: "block",
                }}
              >
                Services
              </Button>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/dashboard">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  ml: 4,
                  color: "secondary.main",
                  fw: 800,
                  display: "block",
                }}
              >
                Dashboard
              </Button>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/admin">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  ml: 4,
                  color: "secondary.main",
                  fw: 800,
                  display: "block",
                }}
              >
                Admin
              </Button>
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={user.displayName}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem>
                {/* here is authentication part (login ,logout) */}
                {!user?.email ? (
                  <Box>
                    <NavLink
                      style={{
                        textDecoration: "none",
                        marginRight: "5px",
                      }}
                      to="/login"
                    >
                      <Button
                        sx={{
                          my: 2,
                          color: "secondary.main",
                          fw: 800,
                          display: "block",
                        }}
                        onClick={handleCloseNavMenu}
                      >
                        Login
                      </Button>
                    </NavLink>
                  </Box>
                ) : (
                  <Box textAlign="center" my={2}>
                    <Typography my={2} variant="h6" noWrap>
                      {user.displayName}
                    </Typography>
                    <Typography variant="h6" noWrap>
                      {user.email}
                    </Typography>

                    <NavLink
                      style={{
                        textDecoration: "none",
                        textAlign: "center",
                        margin: "auto",
                      }}
                      to="/"
                    >
                      <Button
                        sx={{
                          my: 2,
                          color: "secondary.main",
                          fw: 800,
                        }}
                        onClick={logout}
                      >
                        Logout
                      </Button>
                    </NavLink>
                  </Box>
                )}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
