import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";

FilterViewer.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

const useStyles = makeStyles({
  root: {
    padding: 0,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",

    "& > li": {
      listStyleType: "none",
      marginLeft: "10px",
    },
  },
});

const FILTERS_LIST = [
  {
    id: 1,
    getLabel: (filters) => "Free Ship",
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: (filters) => "Promotion",
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLabel: (filters) =>
      `From ${filters.salePrice_gte} to ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) =>
      filters.salePrice_gte &&
      filters.salePrice_gte > 0 &&
      filters.salePrice_lte &&
      filters.salePrice_lte > 0,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;
      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 4,
    getLabel: (filters) => `${filters["category.name"]}`,
    isActive: () => true,
    isVisible: (filters) => filters["category.id"],
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters["category.id"];
      delete newFilters["category.name"];
      return newFilters;
    },
    onToggle: () => {},
  },
];

function FilterViewer({ filters = {}, onChange = null }) {
  const classes = useStyles();

  const visibleFilters = useMemo(() => {
    return FILTERS_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);

  return (
    <Box component="ul" className={classes.root}>
      {visibleFilters.map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            variant="filled"
            size="small"
            color={x.isActive(filters) ? "primary" : "default"}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;
                    const newFilters = x.onToggle(filters);
                    console.log(newFilters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;
                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
