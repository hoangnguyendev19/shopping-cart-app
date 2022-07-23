import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { productApi } from "api/productApi";
import { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FilterViewer from "../components/FilterViewer";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";
import queryString from "query-string";
ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "30px",
  },
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const newParams = queryString.parse(location.search);

    return {
      ...newParams,

      _page: Number.parseInt(newParams._page) || 1,
      _limit: Number.parseInt(newParams._limit) || 9,
      _sort: newParams._sort,
      isPromotion: newParams.isPromotion === "true",
      isFreeShip: newParams.isFreeShip === "true",
    };
  }, [location.search]);

  // const [filters, setFilters] = useState({
  //   _page: 1,
  //   _limit: 9,
  //   _sort: "salePrice:ASC",
  // });

  // const [filters, setFilters] = useState(() => ({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 9,
  //   _sort: queryParams._sort,
  // }));

  const [pagination, setPagination] = useState({
    limit: 9,
    page: 1,
    total: {
      data: 9,
    },
  });

  const handlePageChange = (e, page) => {
    // const newFilters = { ...filters };
    // newFilters._page = page;
    // setFilters(newFilters);
    // setFilters({
    //   ...filters,
    //   _page: page,
    // });

    const filters = {
      ...queryParams,
      _page: page,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSortChange = (newValueSort) => {
    // setFilters({
    //   ...filters,
    //   _sort: newValueSort,
    // });

    const filters = {
      ...queryParams,
      _sort: newValueSort,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFiltersChange = (newFilters) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   ...newFilters,
    // }));
    // setFilters(newFilters);

    const filters = {
      ...queryParams,
      ...newFilters,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSetFilters = (newFilters) => {
    // setFilters(newFilters);

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };

  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(queryParams),
    });
  }, [history, queryParams]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data.data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch data", error.message);
      }

      setLoading(false);
    })();
  }, [queryParams]);

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters
                filters={queryParams}
                onChange={handleFiltersChange}
              />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={queryParams._sort}
                onChange={handleSortChange}
              />
              <FilterViewer filters={queryParams} onChange={handleSetFilters} />
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList data={productList} />
              )}
              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(pagination.total.data / pagination.limit)}
                  color="primary"
                  size="small"
                  page={pagination.page}
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
