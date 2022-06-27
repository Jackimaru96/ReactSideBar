import React, { useState, useContext } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  makeStyles,
  createStyles,
  Checkbox,
  ListItemSecondaryAction,
  ListItemIcon,
  InputBase,
  Chip,
} from "@material-ui/core";

import FilterChips from "./FilterChips";

import photo from "./images/DisplayPic.jpg";

import { ChipContext, DrawerContext, PoiContext } from "../App";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  searchbar: {
    width: "auto",
    display: "block",
    border: "3px solid #00b4cc",
    borderRight: "none",
    padding: "5px",
    height: "50px",
    borderRadius: "5px 0 0 5px",
    outline: "none",
    color: "#9dbfaf",
  },
}));

const SideDrawerCheckboxes = () => {
  const classes = useStyles();
  const [originalArray, setOriginalArray] = useState([
    "James Mcgill",
    "Thomas",
    "Lee Hsien Loong",
    "Tim Yu",
    "Lomang",
    "Hill",
    "Yuipeo",
    "Saul Goodman",
    "Jessie Pinkman",
    "Bruce Wayne",
    "Timmy Tom",
    "Superman",
    "Superwoman",
    "Aysha Chandler",
    "Sakina Sykes",
    "Saira Rowland",
    "Angelina Senior",
    "Rianne Whitley",
    "Dani Flower",
    "Sidrah Edwards",
    "Sachin Dodson",
    "Brandan Macleod",
    "Talia Monroe",
    "Benjamin Carr",
    "Patience Thompson",
    "Stefano Craft",
    "Aneurin Kelley",
    "Amaya Magana",
    "Lewys Dyer",
    "Tevin Dolan",
    "Kendall Wormald",
    "Vincenzo Berger",
    "Nabiha Berry",
  ]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [xPosition, setXPosition] = useContext(DrawerContext);
  const [displayName, setDisplayName] = useContext(PoiContext);
  const [chips, setChips] = useContext(ChipContext);
  const [checked, setChecked] = React.useState([]);

  useEffect(() => {
    setFilteredArray(originalArray);
  }, [originalArray]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    const newChips = [...chips];

    if (currentIndex === -1) {
      newChecked.push(value);
      newChips.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
      newChips.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    setChips(newChips);
    setDisplayName(newChecked);
  };

  const handleItemClick = (event, poiID) => {
    setDisplayName(poiID);

    if (xPosition === "100%") {
      setXPosition("0");
    } else {
      setXPosition("100%");
    }
  };

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = originalArray.filter((user) => {
        return user.toLowerCase().includes(keyword.toLowerCase());
      });
      setFilteredArray(results);
    } else {
      setFilteredArray(originalArray);
    }
  };

  return (
    <>
      <InputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={filter}
        className={classes.searchbar}
      />
      {chips.map((name) => (
        <Chip
          label={name}
          clickable
          variant="outlined"
          onDelete={handleToggle(name)}
          onClick={handleToggle(name)}
          id={name}
        />
      ))}
      <List className={classes.root}>
        {filteredArray.map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem key={value} dense button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemAvatar>
                <Avatar alt="test" src={photo} />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default SideDrawerCheckboxes;
