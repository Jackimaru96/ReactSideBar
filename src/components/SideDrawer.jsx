import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import SideDrawerButton from "./SideDrawerButton";

const useStyles = makeStyles((theme) =>
  createStyles({
    sideDrawer: {
      height: "100%",
      background: "white",
      position: "fixed",
      top: 0,
      right: 0,
      width: "20%",
      zIndex: 200,
      boxShadow: "1px 0px 7px rgba(0,0,0,0.5)",
      transition: "transform 0.3s ease-out",
      overflowY: "scroll",
      overflowX: "hidden",
    },
  })
);

const SideDrawer = ({ children, translate }) => {
  const classes = useStyles();
  return (
    <>
      <SideDrawerButton />
      <div
        className={classes.sideDrawer}
        style={{ transform: `translate(${translate})` }}
      >
        {children}
      </div>
    </>
  );
};

export default SideDrawer;
