import { Alert, Box, Grid, Paper, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import { addToCart } from "features/Cart/cartSlice";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddToCartForm from "../components/AddToCartForm";
import ProductReview from "../components/Filters/ProductReview";
import ProductAdditional from "../components/ProductAdditional";
import ProductDescription from "../components/ProductDescription";
import ProductInfo from "../components/ProductInfo";
import ProductMenu from "../components/ProductMenu";
import ProductThumbnail from "../components/ProductThumbnail";
import { useProductDetail } from "../hooks/useProductDetail";
import { useDispatch } from "react-redux";
import { useState } from "react";

DetailPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "30px",
  },
  left: {
    width: "400px",
    borderRight: "1px solid #ccc",
  },
  right: {
    flex: "1 1 0",
  },
}));

function DetailPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);
  if (loading) {
    return <Box>Loading...</Box>;
  }

  const handleAddToCartSubmit = (formValue) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity: formValue.quantity,
    });

    dispatch(action);
    setOpen(true);
  };

  const handleNoticeClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box>
      <Container className={classes.root}>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>

        <ProductMenu />
        <Switch>
          <Route path={url} exact>
            <ProductDescription product={product} />
          </Route>
          <Route path={`${url}/additional`} exact>
            <ProductAdditional />
          </Route>
          <Route path={`${url}/reviews`} exact>
            <ProductReview />
          </Route>
        </Switch>

        <Snackbar
          open={open}
          onClose={handleNoticeClose}
          autoHideDuration={1500}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert variant="filled" severity="success">
            Bạn đã thêm vào giỏ hàng thành công !
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default DetailPage;
