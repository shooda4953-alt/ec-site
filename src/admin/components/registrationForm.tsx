import React, { useState } from "react";
import { TextField } from "@mui/material";

interface ProductFormProps {
  onSubmit: (productName: string, price: number, description: string) => void;
}

const RegistrationForm: React.FC<ProductFormProps> = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const handleProductNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductName(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Product Name"
        value={productName}
        onChange={handleProductNameChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={handlePriceChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        multiline
        rows={4}
        value={description}
        onChange={handleDescriptionChange}
        fullWidth
        margin="normal"
      />
    </div>
  );
};

export default RegistrationForm;
