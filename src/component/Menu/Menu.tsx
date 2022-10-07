import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { iSidebar, iMenu } from "@myProject/model";

let Menu: (props: iMenu) => JSX.Element = ({
  listItemText,
  ItemIcon,
  onclick,
  className,
}) => {
  return (
    <ListItem className={className}>
      <ListItemButton
        onClick={() => {
          onclick(listItemText);
        }}
      >
        {ItemIcon ? (
          <ListItemIcon>
            <ItemIcon fontSize="small" />
          </ListItemIcon>
        ) : null}

        <ListItemText>
          <Typography variant="body2">{listItemText}</Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default Menu;
