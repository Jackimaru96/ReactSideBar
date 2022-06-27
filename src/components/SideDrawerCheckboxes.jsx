import React, { useState, useContext } from "react";
import {
  List,
  ListItemText,
  ListItemAvatar,
  Avatar,
  makeStyles,
  withStyles,
  createStyles,
  ListItemSecondaryAction,
  Typography,
  ListItemIcon,
  InputBase,
  Chip,
} from "@material-ui/core";

import MuiListItem from "@material-ui/core/ListItem";
import MuiCheckBox from "@material-ui/core/Checkbox";

import FilterChips from "./FilterChips";

import photo from "./images/DisplayPic.jpg";

import { ChipContext, DrawerContext, PoiContext } from "../App";
import { useEffect } from "react";

const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#eaf9fb",
    },
  },
  selected: {},
})(MuiListItem);

const Checkbox = withStyles({
  root: {
    "&$checked": {
      color: "green",
    },
  },
  checked: {},
})(MuiCheckBox);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  searchbar: {
    width: "95%",
    height: "20px",
    border: "3px solid gray",
    borderRadius: "30px",
    backgroundColor: "#d2d1d1",
    color: "black",
    margin: "5px 20px 5px 5px",
    fontSize: "19px",
    padding: "20px 20px",
    cursor: "auto",
    "&.Mui-focused": {
      borderColor: "#00688a",
      backgroundColor: "#eaf9fb",
    },
  },
  listItem: {
    border: "1px solid #f3f2f2",
    boxShadow: "1px 5px #f3f2f2",
    borderRadius: "10px",
    margin: "2px 10px",
    width: "95%",
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#eaf9fb",
    },
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
        placeholder="Search by POI name..."
        inputProps={{ "aria-label": "search" }}
        onChange={filter}
        className={classes.searchbar}
      />
      {checked.length > 0 && (
        <Typography align="right">{checked.length} POIs selected</Typography>
      )}
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
            <ListItem
              className={`${classes.listItem} $`}
              key={value}
              selected={checked.includes(value)}
              dense
              button
              onClick={handleToggle(value)}
            >
              <ListItemSecondaryAction>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemSecondaryAction>
              <ListItemAvatar>
                <Avatar alt="test" src={photo} />
              </ListItemAvatar>
              <ListItemText
                id={labelId}
                primary={`${value}`}
                secondary={`ABC Politician`}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default SideDrawerCheckboxes;
