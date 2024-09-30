import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

interface ITextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}

export default function TextField({
  label,
  value,
  onChange,
  onKeyDown,
}: ITextFieldProps & Omit<TextFieldProps, 'onChange'>) {
  return (
    <MuiTextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => onKeyDown && onKeyDown(e)}
      sx={{ width: '100%' }}
    />
  );
}
