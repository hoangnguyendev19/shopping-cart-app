import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import categoriesApi from "api/categoriesApi";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

ProductByCategory.propTypes = {
  onChange: PropTypes.func,
};

// const theme = createTheme();

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },

  menu: {
    padding: 0,
    margin: 0,
    listStyleType: "none",

    "& > li": {
      marginTop: "10px",
      transition: "all 0.25s linear",

      "&:hover": {
        cursor: "pointer",
        color: "#ccc",
      },
    },
  },
});

function ProductByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const response = await categoriesApi.getAll();
        const { data } = response;

        setCategoryList(
          data.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log("Failed to fetch category list", error.message);
      }
    })();
  }, []);

  const handleCategoryChange = (newCategory) => {
    if (onChange) {
      onChange(newCategory.id, newCategory.name);
    }
  };

  return (
    // <ThemeProvider theme={theme}>
    <Box className={classes.root}>
      <Typography variant="subtitle2" fontSize="16px">
        Category List
      </Typography>
      <ul className={classes.menu}>
        {categoryList &&
          categoryList.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategoryChange(category)}
            >
              {category.name}
            </li>
          ))}
      </ul>
    </Box>
    // </ThemeProvider>
  );
}

export default ProductByCategory;
