import { Avatar } from "@mui/material";

interface iProfile {
  name: string;
}

let Profile: (props: iProfile) => JSX.Element = ({ name }) => {
  return <Avatar>{name}</Avatar>;
};

export default Profile;

