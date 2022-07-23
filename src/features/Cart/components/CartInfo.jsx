import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormatPrice } from "features/utils";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "../selectors";

CartInfo.propTypes = {};

const useStyles = makeStyles((theme) => ({
  head: {
    marginBottom: "10px",
  },
}));

function CartInfo(props) {
  const classes = useStyles();
  const total = useSelector(cartTotalSelector);

  return (
    <>
      <Grid className={classes.head}>
        <Paper elevation={0} sx={{ padding: "20px 15px" }}>
          <Typography variant="h6">Địa chỉ</Typography>
          <Typography variant="body2">Nguyễn Huy Hoàng - 0327194438</Typography>
          <Typography variant="body2">
            21 Lê Lợi, Phú Phong, Tây Sơn, Bình Định
          </Typography>
        </Paper>
      </Grid>
      <Grid>
        <Paper elevation={0} sx={{ padding: "20px 15px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Typography component="span" variant="body2">
              Tổng tiền
            </Typography>
            <Typography component="span" variant="body2" sx={{ color: "red" }}>
              {FormatPrice(total)}
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" fullWidth>
              Mua Hàng
            </Button>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default CartInfo;
