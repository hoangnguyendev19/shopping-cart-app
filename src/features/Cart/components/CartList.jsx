import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button, Checkbox, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

CartList.propTypes = {
  cartList: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  head: {
    marginBottom: "10px",
  },
  paper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
}));

function CartList({ cartList = [] }) {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.head}>
        <Paper elevation={0} className={classes.paper}>
          <Grid item xs={1}>
            <Checkbox />
          </Grid>
          <Grid item xs={5}>
            <Typography variant="subtitle1">Tất cả sản phẩm</Typography>
          </Grid>
          <Grid item xs={1.5}>
            <Typography variant="subtitle1">Đơn giá</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Số lượng</Typography>
          </Grid>
          <Grid item xs={1.5}>
            <Typography variant="subtitle1">Thành tiền</Typography>
          </Grid>
          <Grid item xs={1}>
            <Button variant="text">
              <DeleteOutlineIcon />
            </Button>
          </Grid>
        </Paper>
      </Grid>
      {cartList.length > 0 &&
        cartList.map((item) => (
          <Grid key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
    </>
  );
}

export default CartList;
