import { Chip } from "@material-ui/core";
import React, { useContext } from "react";
import { ChipContext, PoiContext } from "../App";

const FilterChips = (name) => {
  const [displayName, setDisplayName] = useContext(PoiContext);
  const [chips, setChips] = useContext(ChipContext);

  const handleDelete = (name) => {
    const filteredNames = displayName.filter(
      (currentName) => currentName === name
    );

    const filteredChips = chips.filter((chipName) => chipName === name);
    setDisplayName(filteredNames);
    setChips(filteredChips);
  };
  return <Chip label={name} onDelete={handleDelete(name)} />;
};

export default FilterChips;
