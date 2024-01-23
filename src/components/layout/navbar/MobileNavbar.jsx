import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "white",
        color: "#515151",
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            name: "Inicio",
            route: "/",
          },
          {
            name: "Muebles a medida",
            route: "/mueblesAMedida",
          },
          {
            name: "Decoración",
            route: "/decoracion",
          },
        ].map((el, index) => (
          <ListItem key={el.name} disablePadding>
            <Link to={el.route}>
              <ListItemButton>
                <ListItemText primary={el.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton>
            <a href="#contacto">
              <ListItemText primary="contacto" />
            </a>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <nav className="navbarMobile">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div
            style={{
              width: "20rem",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Link className="menuLink" to="/">
              <img
                alt="logo"
                src="https://res.cloudinary.com/drez01kou/image/upload/v1703792265/mobel-deco/logo/cgnnbcjwnxkvvar9xhvv.png"
              />
            </Link>
          </div>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ color: "#DB0809" }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </nav>
  );
}
