import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { STATIC_HOST } from "constants/index";
import { THUMBNAIL_URL } from "constants/index";

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_URL;

  return (
    <Box>
      <img src={thumbnailUrl} alt={product.name} width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
