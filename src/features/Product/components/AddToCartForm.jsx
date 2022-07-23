import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import QuantityField from "../Form/QuantityField";

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, "Minimum value is 1")
      .required("Please enter quantity")
      .typeError("Please enter a number"),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      style={{ padding: "0 20px" }}
    >
      <QuantityField
        name="quantity"
        label="Quantity"
        form={form}
        disabled={false}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        sx={{ width: "200px" }}
      >
        Add To Cart
      </Button>
    </form>
  );
}

export default AddToCartForm;
