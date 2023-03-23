import * as React from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SettingsIcon from "@mui/icons-material/Settings";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import LogoutIcon from "@mui/icons-material/Logout";
import LogintIcon from "@mui/icons-material/Login";
const iconArray = [
  <ManageAccountsIcon />,
  <Diversity1Icon />,
  <SportsEsportsIcon />,
  <ShoppingCartIcon />,
  <SettingsIcon />,
  <LogoutIcon />,
];

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [loginState, setLogin] = React.useState(false);
  const navigate = useNavigate();
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
        bgcolor: "grey",
        mt: "24%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {loginState ? (
        <List>
          {[
            { text: "Account", nav: "/profile/account" },
            { text: "Friends", nav: "/profile/account" },
            { text: "Library", nav: "/profile/library" },
            { text: "Cart", nav: "/profile/cart/k" },
            { text: "Setting", nav: "/profile/account" },
          ].map(({ text, nav }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(nav);
                }}
              >
                <ListItemIcon>{iconArray[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem key="Logout" disablePadding>
            <ListItemButton
              onClick={() => {
                setLogin(false);
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setLogin(true);
              }}
            >
              <ListItemIcon>
                <LogintIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </Box>
  );
  const anchor = "right";
  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>Profile</Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
