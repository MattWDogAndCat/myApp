import { PaletteMode } from "@mui/material";
import { ThemeOptions } from "@mui/material";
import darkTheme from "./dark";
import lightTheme from "./light";

let getDesignToken: (mode: PaletteMode) => ThemeOptions;
getDesignToken = (mode) => {
  if (mode === "dark") {
    return darkTheme;
  }
  return lightTheme;
};

export default getDesignToken;
