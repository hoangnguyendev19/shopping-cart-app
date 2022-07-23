import { productApi } from "api/productApi";
import { useEffect, useState } from "react";

export const useProductDetail = (productId) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await productApi.get(productId);
        setProduct(data);
      } catch (error) {
        console.log("Failed to fetch product: ", error.message);
      }
    })();
    setLoading(false);
  }, [productId]);

  return { product, loading };
};
