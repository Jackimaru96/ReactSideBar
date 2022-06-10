import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  makeStyles,
  createStyles,
} from "@material-ui/core";

import photo from "./images/DisplayPic.jpg";

import { DrawerContext, PoiContext } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const SideDrawerContent = () => {
  const classes = useStyles();
  const [xPosition, setXPosition] = useContext(DrawerContext);
  const [displayName, setDisplayName] = useContext(PoiContext);

  const handleItemClick = (event, poiID) => {
    setDisplayName(poiID);

    if (xPosition === "100%") {
      setXPosition("0");
    } else {
      setXPosition("100%");
    }
  };

  return (
    <List className={classes.root}>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src={photo} />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/180" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/200" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/140" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/160" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/170" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/150" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/180" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/200" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/140" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/160" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/170" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/150" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/180" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/200" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/140" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/160" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/170" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/150" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/180" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/200" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/140" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/160" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/170" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
      <ListItem
        button
        alignItems="flex-start"
        onClick={(e) => handleItemClick(e, "poi-id")}
      >
        <ListItemAvatar>
          <Avatar alt="test" src="https://random.imagecdn.app/500/150" />
        </ListItemAvatar>
        <ListItemText primary="Tim" />
      </ListItem>
    </List>
  );
};

export default SideDrawerContent;
