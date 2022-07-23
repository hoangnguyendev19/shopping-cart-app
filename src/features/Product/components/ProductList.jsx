import { Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Product from "./Product";

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};

function ProductList(props) {
  const { data } = props;
  return (
    <Box>
      <Grid container spacing={0}>
        {data &&
          data.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
