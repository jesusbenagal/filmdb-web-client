import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

interface ITextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function TextField({
  label,
  value,
  onChange,
}: ITextFieldProps & TextFieldProps) {
  return (
    <MuiTextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{ width: '100%' }}
    />
  );
}
