import React, { useContext } from "react";
import { createStyles, makeStyles, Tooltip } from "@material-ui/core";
import { DrawerContext } from "../App";

const useStyles = makeStyles((theme) =>
  createStyles({
    toggleDrawerButton: {
      height: "200px",
      borderTopLeftRadius: "10rem",
      borderBottomLeftRadius: "9rem",
      width: "40px",
      position: "absolute",
      outline: "none",
      top: 0,
      right: 20,
      zIndex: 1,
      transition: "transform 0.5s ease-out",
      backgroundColor: "#7cd0d0",
      borderColor: "#7cd0d0",
      borderRight: 0,
    },
  })
);

const SideDrawerButton = () => {
  const classes = useStyles();
  const [xPosition, setXPosition] = useContext(DrawerContext);

  const toggleDrawer = () => {
    if (xPosition === "100%") {
      setXPosition("0");
    } else {
      setXPosition("100%");
    }
  };
  return (
    <Tooltip title="Change POI" placement="left" arrow>
      <button
        className={classes.toggleDrawerButton}
        onClick={() => toggleDrawer()}
        style={{ transform: `translate(${xPosition}, 20vh)` }}
      ></button>
    </Tooltip>
  );
};

export default SideDrawerButton;
