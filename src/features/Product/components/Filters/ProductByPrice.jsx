import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

ProductByPrice.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles({
  root: {
    paddingTop: "20px",
    borderTop: "1px solid #ccc",
  },

  prices: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0",

    "& > span": {
      marginLeft: "5px",
      marginRight: "5px",
    },
  },
});

function ProductByPrice({ onChange }) {
  const classes = useStyles();
  const [price, setPrice] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const newPrice = { ...price };
    newPrice[name] = value;
    setPrice(newPrice);
  };

  const handleSubmit = () => {
    if (onChange) onChange(price);
    setPrice({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Box padding="10px" className={classes.root}>
      <Typography variant="subtitle2" component="h3" fontSize="16px">
        Price
      </Typography>
      <Box className={classes.prices}>
        <TextField
          size="small"
          value={price.salePrice_gte}
          variant="standard"
          name="salePrice_gte"
          onChange={(e) => handlePriceChange(e)}
        />
        <span> - </span>
        <TextField
          size="small"
          variant="standard"
          value={price.salePrice_lte}
          name="salePrice_lte"
          onChange={(e) => handlePriceChange(e)}
        />
      </Box>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        onClick={handleSubmit}
      >
        Apply
      </Button>
    </Box>
  );
}

export default ProductByPrice;
