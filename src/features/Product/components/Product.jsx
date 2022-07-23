import { Box, Typography } from "@mui/material";
import { STATIC_HOST, THUMBNAIL_URL } from "constants/index";
import { FormatPrice } from "features/utils";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
};

function Product(props) {
  const { product } = props;
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_URL;

  const history = useHistory();

  const navigateToDetail = () => {
    history.push(`/products/${product.id}`);
  };

  return (
    <Box padding={1} onClick={navigateToDetail} sx={{ cursor: "pointer" }}>
      <Box padding={1}>
        <img src={thumbnailUrl} width="100%" alt={product.name} />
      </Box>
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {FormatPrice(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : ""}
      </Typography>
    </Box>
  );
}

export default Product;
