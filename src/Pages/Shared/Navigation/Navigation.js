import * as React from "react";
import Grid from "@mui/material/Grid";
import logo from "../../../images/logo.png";
import { Box, Button, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import NavigationTab from "./NavigationTab";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navigation = () => {
  const { user, logout, admin } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Grid container spacing={4} sx={{ my: 1 }}>
        <Grid item xs={6} md={3}>
          <img src={logo} alt="" />
        </Grid>
        <Grid item xs={0} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Grid container spacing={2}>
            <Grid item xs={0} md={4} sx={{ display: "flex" }}>
              <EmailIcon
                sx={{
                  border: "1px solid gray",
                  borderRadius: "50%",
                  p: 1,
                  m: 1,
                }}
              ></EmailIcon>
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="button"
                  sx={{ fontWeight: "600" }}
                  display="block"
                  gutterBottom
                >
                  FOR SUPPORT MAIL US:
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  info@example.com
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={0} md={5} sx={{ display: "flex" }}>
              <CallIcon
                sx={{
                  border: "1px solid gray",
                  borderRadius: "50%",
                  p: 1,
                  m: 1,
                }}
              ></CallIcon>
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{ fontWeight: "600" }}
                  variant="button"
                  display="block"
                  gutterBottom
                >
                  SERVICE HELPLINE:
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  +61-1234-5678-9
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={0} md={3}>
              <Box sx={{ textAlign: "left" }}>
                <FacebookIcon sx={{ m: 1, cursor: "pointer" }}></FacebookIcon>
                <TwitterIcon sx={{ m: 1, cursor: "pointer" }}></TwitterIcon>
                <LinkedInIcon sx={{ m: 1, cursor: "pointer" }}></LinkedInIcon>
                <InstagramIcon sx={{ m: 1, cursor: "pointer" }}></InstagramIcon>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={3}>
          {!user?.email && (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button variant="contained">Login</Button>
            </Link>
          )}
          {user?.email && (
            <Box>
              {" "}
              <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                  <Avatar sx={{ width: 32, height: 32 }}>
                    {user.displayName.charAt(0)}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <br />
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {admin && (
                  <Box>
                    <MenuItem onClick={handleClose}>
                      <Link
                        to="/adminDashboard"
                        style={{ textDecoration: "none" }}
                      >
                        Admin Dashboard
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/addNewCar" style={{ textDecoration: "none" }}>
                        <>Add New car</>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/makeAdmin" style={{ textDecoration: "none" }}>
                        Make admin
                      </Link>
                    </MenuItem>
                  </Box>
                )}
                {user.email && !admin && (
                  <Link to="/myOrders" style={{ textDecoration: "none" }}>
                    <MenuItem>My orders </MenuItem>
                  </Link>
                )}
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </Box>
          )}
        </Grid>
      </Grid>
      <NavigationTab></NavigationTab>
    </Box>
  );
};

export default Navigation;
