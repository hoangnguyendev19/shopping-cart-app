import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

ProductByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const useStyles = makeStyles({
  root: {
    paddingTop: "20px",
    borderTop: "1px solid #ccc",
  },
  service: {
    padding: 0,
    "& > li": {
      listStyleType: "none",
    },
  },
});

function ProductByService({ filters = {}, onChange = null }) {
  const classes = useStyles();
  // const [service, setService] = useState({
  //   isPromotion: false,
  //   isFreeShip: false,
  // });

  // const handleServiceChange = (e) => {
  //   const { name, checked } = e.target;
  //   const newService = { ...service };
  //   newService[name] = checked;
  //   if (!onChange) return;
  //   onChange(newService);
  //   setService(newService);
  // };

  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box padding="10px" className={classes.root}>
      <Typography variant="subtitle2" component="h3" fontSize="16px">
        Services
      </Typography>

      <ul className={classes.service}>
        {[
          { value: "isPromotion", label: "Is Promotion" },
          { value: "isFreeShip", label: "Is FreeShip" },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
      {/* <Box>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="isPromotion"
                checked={service.isPromotion}
                color="primary"
                onChange={(e) => handleServiceChange(e)}
              />
            }
            label="Is Promotion"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="isFreeShip"
                checked={service.isFreeShip}
                color="primary"
                onChange={(e) => handleServiceChange(e)}
              />
            }
            label="Is Free Ship"
          />
        </FormGroup>
      </Box> */}
    </Box>
  );
}

export default ProductByService;
