import { iFavourite, iMenu } from "../../interface";
import Menu from "../../component/Menu/Menu";
import { List } from "@mui/material";

let Favourite: (props: { favouriteList: iFavourite }) => JSX.Element = (
  props
) => {
  return (
    <List subheader={props.favouriteList.subList}>
      {props.favouriteList.menuList.map((i: iMenu, id: number) => {
        return <Menu key={id} listItemText={i.listItemText} />;
      })}
    </List>
  );
};

export default Favourite;
