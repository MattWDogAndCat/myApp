import Menu from "../../component/Menu/Menu";
import Favourite from "../Favourite/Favourite";
import Profile from "../Profile/Profile";
import { MENULIST } from "../../constant/menu";
import { styled } from "@mui/material/styles";
import { iMenu } from "@myProject/model";
import { useState } from "react";

import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  Fab,
  List,
  ListSubheader,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ProfileTitle = styled(Typography)`
  font-weight: 600;
`;

const StyledMenu = styled(Menu)`
  & .MuiButtonBase-root {
    &::before {
      content: "";
      display: ${(props) => (props.menuFocus ? "block" : "none")};
      position: absolute;
      width: 5px;
      height: 100%;
      left: 0;
      top: 0;
      background-color: #f65a83;
      border-radius: 0 5px 5px 0;
    }
    & .MuiListItemIcon-root,
    .MuiListItemText-root {
      color: ${(props) => (props.menuFocus ? "#f65a83" : "none")};
    }
    & .MuiListItemIcon-root {
      min-width: 35px;
    }
  }
`;

interface iSidebar {}
let Sidebar: (props: iSidebar) => JSX.Element = (props) => {
  const [menuFocus, setMenuFocus] = useState<string>("Home");

  const handleOnClick = (focusMenu: string): void => {
    setMenuFocus(focusMenu);
  };
  return (
    <>
      <Box>
        <Drawer variant="persistent" open sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
          <Toolbar>
            <Box sx={{ display: "flex" }}>
              <Profile name="MW" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "20px",
                }}
              >
                <ProfileTitle variant="subtitle1">Matt wang</ProfileTitle>
                <ProfileTitle variant="caption">
                  Sr.SoftWare Engineer
                </ProfileTitle>
              </Box>
            </Box>
          </Toolbar>
          <Box sx={{ flex: "1" }}>
            <List
              subheader={<ListSubheader component="div">Menu</ListSubheader>}
            >
              {MENULIST.map((i: iMenu, id: number) => {
                return (
                  <StyledMenu
                    key={id}
                    listItemText={i.listItemText}
                    ItemIcon={i.ItemIcon}
                    onclick={handleOnClick}
                    menuFocus={menuFocus === i.listItemText}
                  />
                );
              })}
            </List>
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 16px",
            }}
          >
            <Box>
              <Favourite
                favouriteList={{
                  menuList: [
                    { listItemText: "company" },
                    { listItemText: "maps" },
                  ],
                  subList: (
                    <ListSubheader component="div">Favourite</ListSubheader>
                  ),
                }}
              />
            </Box>
            <Box sx={{ marginTop: "10px" }}>
              <Fab size="small" color="secondary" aria-label="add">
                <AddIcon />
              </Fab>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
