import { createStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

export const navBarStyles = () =>
  createStyles({
    bar: {
      color: "#ff0000",
      backgroundColor: "#fff"
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: 8 * 0,
      marginLeft: 8 * 0
    },
    logo: {
      marginRight: 8
    },
    title: {
      display: "none"
    },
    search: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: fade("#000", 0.07),
      "&:hover": {
        backgroundColor: fade("#000", 0.15)
      },
      marginRight: 8 * 2,
      marginLeft: 8 * 2,
      width: "100%"
    },
    searchIcon: {
      width: 8 * 6,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: 8,
      paddingLeft: 8 * 6,
      width: "100%"
    }
  })