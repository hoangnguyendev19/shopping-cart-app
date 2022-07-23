import React from "react";
import PropTypes from "prop-types";
import ProductByCategory from "./Filters/ProductByCategory";
import { Box } from "@mui/material";
import ProductByPrice from "./Filters/ProductByPrice";
import ProductByService from "./Filters/ProductByService";

ProductFilters.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId, newCategoryName) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      "category.id": newCategoryId,
      "category.name": newCategoryName,
    };
    onChange(newFilters);
  };

  const handlePriceChange = (newValue) => {
    if (onChange) onChange(newValue);
  };

  const handleServiceChange = (newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Box>
      <ProductByCategory onChange={handleCategoryChange} />
      <ProductByPrice onChange={handlePriceChange} />
      <ProductByService filters={filters} onChange={handleServiceChange} />
    </Box>
  );
}

export default ProductFilters;
