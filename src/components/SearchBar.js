import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    display: "flex",
    borderRadius: "0px",
    backgroundColor: "#262626",
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    marginTop:"1.5vmin",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: "auto",
      borderRadius: "0px",
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },
  inputRoot: {
    color: "white"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%"
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch"
    // }
  }
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <div className={classes.search}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}
