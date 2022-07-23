import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";

ProductSort.propTypes = {
  currentSort: PropTypes.string,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort = "salePrice:ASC", onChange = null }) {
  const handleSortChange = (event, newValueSort) => {
    if (onChange) onChange(newValueSort);
  };

  return (
    <Tabs value={currentSort} onChange={handleSortChange}>
      <Tab label="Increment Price" value="salePrice:ASC" />
      <Tab label="Decrement Price" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
