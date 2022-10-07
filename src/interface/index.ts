import { SvgIconProps } from "@mui/material/SvgIcon";
import { ThemeOptions, ListSubheaderProps, ListSubheader } from "@mui/material";
import React, { ReactNode } from "react";

export interface iTheme extends ThemeOptions {
  custom: {
    width: number;
    height: number;
  };
}

export interface iMenu {
  className?: string;
  ItemIcon?: (props: SvgIconProps) => React.ReactElement;
  listItemText: string;
  menuFocus?: boolean;
  onclick?: (item: string) => void;
}

export interface iSidebar {
  subList?: React.ReactNode;
  menuList: iMenu[];
}

export interface iFavourite extends iSidebar {}
