import React from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import BiotechIcon from "@mui/icons-material/Biotech";
import ScienceIcon from "@mui/icons-material/Science";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import MenuIcon from "@mui/icons-material/Menu";

import "./Navbar.css";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
export default function Navbar() {
  const [state, setState] = React.useState({
    right: false,
  });
  const match = useMediaQuery("(max-width: 1024px)");

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "cafi",
          "research",
          "publication",
          "teaching",
          "lab-members",
          "contact-us",
        ].map((text, index) => (
          <ListItem key={text} disablePadding className="burger-item">
            <Link to={text} className="burger-link">
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <BiotechIcon />}
                  {index === 1 && <ScienceIcon />}
                  {index === 2 && <NewspaperIcon />}
                  {index === 3 && <SchoolIcon />}
                  {index === 4 && <GroupsIcon />}
                  {index === 5 && <ContactSupportIcon />}
                </ListItemIcon>
                {index == 0 && <ListItemText primary="Cafi" />}
                {index == 1 && <ListItemText primary="Research" />}
                {index == 2 && <ListItemText primary="Publication" />}
                {index == 3 && <ListItemText primary="Teaching" />}
                {index == 4 && <ListItemText primary="Members" />}
                {index == 5 && <ListItemText primary="Contact" />}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className="navbar">
      <div className="navbar-logosection">
        <div className="navbar-brand">
          <div>
            <Link to="/">
              <img
                className="navbar-logo-img"
                // src="/images/uno-icon-color.png"
                src="/img/header/logo.png"
                alt="UNO logo"
              />
            </Link>
          </div>
          <div className="navbar-lab-name">Kiran Bastola</div>
        </div>
      </div>
      {!match ? (
        <div className="navbar-nav">
          <ul className="navbar-list">
            <li className="navbar-listitem">
              <Link to="/cafi">Cafi</Link>
            </li>
            <li className="navbar-listitem">
              <Link to="/research">Research</Link>
            </li>
            <li className="navbar-listitem">
              <Link to="/publication">Publication</Link>
            </li>
            <li className="navbar-listitem">
              <Link to="/teaching">Teaching</Link>
            </li>
            <li className="navbar-listitem">
              <Link to="/lab-members">Members</Link>
            </li>
            <li className="navbar-listitem">
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      ) : (
        <React.Fragment key="right">
          <Button onClick={toggleDrawer("right", true)}>
            <MenuIcon style={{ color: "black" }} />
          </Button>
          <Drawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
      )}
    </div>
  );
}
