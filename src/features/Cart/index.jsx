import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import CartInfo from "./components/CartInfo";
import CartList from "./components/CartList";

CartFeature.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "30px",
  },
  right: {
    width: "350px",
  },
  left: {
    flex: "1 1 0",
  },
  head: {
    marginBottom: "10px",
  },
  paper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  product: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100px",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function CartFeature(props) {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartItems);
  // const count = useSelector(cartItemCountSelector);

  // const [value, setValue] = useState()

  // const handleAddToCartSubmit = (quantity) => {
  //   const action =

  //   dispatch(action);
  // };

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <CartList cartList={cartList} />
          </Grid>
          <Grid item className={classes.right}>
            <CartInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CartFeature;
