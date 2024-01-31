// RegistrationForm.tsx

import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

interface ProductFormProps {
  onSubmit: (productName: string, price: number, content: string) => void;
}

const RegistrationForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");

  const handleProductNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductName(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleFormSubmit = () => {
    onSubmit(productName, price, content);
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
        label="Content"
        multiline
        rows={4}
        value={content}
        onChange={handleContentChange}
        fullWidth
        margin="normal"
      />
      <Grid container justifyContent="flex-end" mt={2}>
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Grid>
    </div>
  );
};

export default RegistrationForm;
