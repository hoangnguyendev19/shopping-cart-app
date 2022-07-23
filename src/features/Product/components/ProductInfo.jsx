import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormatPrice } from "../../utils";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles({
  root: {
    padding: "20px 15px",
    borderBottom: "1px solid #ccc",
  },
  name: {},
  description: {
    margin: "15px 0 !important",
  },
  priceBox: {
    backgroundColor: "#ccc",
    padding: "10px",
  },
  salePrice: {
    fontSize: "24px !important",
    marginRight: "20px !important",
  },
  originalPrice: {
    fontSize: "14px !important",
    marginRight: "20px !important",
    textDecoration: "line-through",
  },
  promotionPercent: {
    fontSize: "14px !important",
  },
});

function ProductInfo({ product = {} }) {
  const classes = useStyles();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;

  return (
    <Box className={classes.root}>
      <Typography conponent="h1" variant="h3">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>

      <Box className={classes.priceBox}>
        <Typography component="span" className={classes.salePrice}>
          {FormatPrice(salePrice)}
        </Typography>

        {promotionPercent > 0 && (
          <>
            <Typography component="span" className={classes.originalPrice}>
              {FormatPrice(originalPrice)}
            </Typography>
            <Typography component="span" className={classes.promotionPercent}>
              {promotionPercent > 0 ? ` - ${promotionPercent}%` : ""}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
