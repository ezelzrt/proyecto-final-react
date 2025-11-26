import { useState } from "react";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProducts } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/products";
import { CATEGORIES } from "../../../utils/config";

import "./ProductFormContainer.css";

export const ProductFormContainer = () => {
  const [loading, setLoading] = useState();
  const [errors, setErrors] = useState();
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProducts({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
        const imageUrl = await uploadToImgbb(file);
        const newProduct = {
            ...product,
            price: Number(product.price),
            imageUrl
        }

        await createProduct(newProduct);
        alert("Product created successfully");

        setProduct({
            name: "",
            price: "",
            category: "",
            description: "",
        });
        setFile(null);

    } catch (error) {
        setErrors({ general: error.message });
    } finally {
        setLoading(false);
    }

  };

  return (
    <ProductFormUI
      product={product}
      categories={CATEGORIES}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={setFile}
      onSubmit={handleSubmit}
    />
  );
};
