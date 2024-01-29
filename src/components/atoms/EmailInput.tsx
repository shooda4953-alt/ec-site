import React from "react";
import TextField from "@mui/material/TextField";

interface EmailInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      type="email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="standard"
    />
  );
};

export default EmailInput;
