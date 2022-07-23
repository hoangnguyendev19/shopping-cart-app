import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { useState } from "react";

import ProductThumbnail from "features/Product/components/ProductThumbnail";
import { FormatPrice } from "features/utils";
import { useDispatch } from "react-redux";
import { removeFromCart, setQuantity } from "../cartSlice";

CartItem.propTypes = {
  item: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
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

function CartItem({ item = {} }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const count = item.quantity;
  const [value, setValue] = useState(count);

  const handleItemRemove = (id) => {
    const action = removeFromCart(id);
    dispatch(action);
  };

  const handleIncrementValue = (id) => {
    const newValue = value + 1;
    const action = setQuantity({
      id: id,
      quantity: newValue,
    });

    dispatch(action);
    setValue(newValue);
  };

  const handleDecrementValue = (id) => {
    const newValue = value === 0 ? 0 : value - 1;
    const action = setQuantity({
      id: id,
      quantity: newValue,
    });

    dispatch(action);
    setValue(newValue);
  };

  return (
    <>
      <Paper elevation={0} className={classes.product}>
        <Grid item xs={1}>
          <Checkbox />
        </Grid>
        <Grid item xs={5}>
          <Box className={classes.paper}>
            <Box width="40%">
              <ProductThumbnail product={item.product} />
            </Box>
            <Typography variant="body2">{item.product.name}</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Typography variant="body1">
            {FormatPrice(item.product.salePrice)}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Box className={classes.box}>
            <IconButton onClick={() => handleDecrementValue(item.id)}>
              <RemoveCircleOutline />
            </IconButton>

            <OutlinedInput
              // id={name}
              type="tel"
              value={value}
              size="small"
            />

            <IconButton onClick={() => handleIncrementValue(item.id)}>
              <AddCircleOutline />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Typography variant="body1" sx={{ color: "red" }}>
            {FormatPrice(item.product.salePrice * value)}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Button variant="text" onClick={() => handleItemRemove(item.id)}>
            <DeleteOutlineIcon />
          </Button>
        </Grid>
      </Paper>
    </>
  );
}

export default CartItem;
