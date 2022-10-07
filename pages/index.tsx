import type { NextPage } from "next";
import { SyntheticEvent, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PaletteMode, ThemeOptions, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import getDesignToken from "../styles/theme";
import {
  FormGroup,
  Switch,
  FormControlLabel,
  Box,
  Toolbar,
} from "@mui/material";
import Sidebar from "../src/feature/Sidebar/Sidebar";
import Content from "../src/feature/Content/Content";

const Home: NextPage = () => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const designtToken: ThemeOptions = getDesignToken(mode);
  const handleOnClick: (e: SyntheticEvent) => void = (e) => {
    if ((e.target as HTMLInputElement).checked) {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const theme = createTheme(designtToken);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <FormGroup>
        <FormControlLabel
          value={false}
          control={<Switch />}
          onChange={handleOnClick}
          label="Dark Mode"
        />
      </FormGroup> */}
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: (theme) => theme.custom.width }}>
          <Sidebar />
        </Box>
        <Box
          sx={{
            width: (theme) => `calc(100vw - ${theme.custom.width}px)`,
            height: "100vh",
          }}
        >
          <Content />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
