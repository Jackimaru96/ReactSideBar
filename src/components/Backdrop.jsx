import React, { useContext } from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import { DrawerContext } from "../App";

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      position: "fixed",
      top: 0,
      right: 0,
      zIndex: 100,
    },
  })
);

const Backdrop = ({ children }) => {
  const [xPosition, setXPosition] = useContext(DrawerContext);
  const toggleDrawer = () => {
    if (xPosition === "100%") {
      setXPosition("0");
    } else {
      setXPosition("100%");
    }
  };
  const classes = useStyles();
  return <div className={classes.backdrop} onClick={() => toggleDrawer()} />;
};

export default Backdrop;
