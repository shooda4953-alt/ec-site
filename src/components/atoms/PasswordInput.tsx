import React from "react";
import TextField from "@mui/material/TextField";

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <TextField
      label={label}
      type="password"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="standard"
    />
  );
};

export default PasswordInput;
