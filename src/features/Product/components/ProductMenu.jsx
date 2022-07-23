import { Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink, useRouteMatch } from "react-router-dom";

ProductMenu.propTypes = {};

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: 0,
    listStyleType: "none",
    "& > li": {
      padding: "16px 32px",
    },
    "& > li > a": {
      textDecoration: "none",
      color: "#000",
    },
    "& > li > a.active": {
      color: "blue",
      textDecoration: "underline",
    },
  },
});

function ProductMenu(props) {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link component={NavLink} to={url} exact>
          Description
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${url}/additional`} exact>
          Additional
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${url}/reviews`} exact>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
