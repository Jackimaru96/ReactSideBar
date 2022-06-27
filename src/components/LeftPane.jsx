import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    leftPane: {
      height: "100%",
      background: "white",
      position: "fixed",
      left: 0,
      top: 0,
      width: "20%",
      zIndex: 200,
      boxShadow: "1px 0px 7px rgba(0,0,0,0.5)",
      overflowY: "scroll",
    },
  })
);

const LeftPane = ({ children, translate }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.leftPane}>{children}</div>
    </>
  );
};

export default LeftPane;
