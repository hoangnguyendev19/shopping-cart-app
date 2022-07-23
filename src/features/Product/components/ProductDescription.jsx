import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";

ProductDescription.propTypes = {
  product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
  const safeDescription = DOMPurify.sanitize(product.description);
  return <div dangerouslySetInnerHTML={{ __html: safeDescription }} />;
}

export default ProductDescription;
