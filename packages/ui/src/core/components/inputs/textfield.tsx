import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

interface ITextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  style: React.CSSProperties;
}

export default function TextField({
  label,
  value,
  onChange,
  onKeyDown,
  style,
}: ITextFieldProps & Omit<TextFieldProps, 'onChange'>) {
  return (
    <MuiTextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => onKeyDown && onKeyDown(e)}
      style={style}
    />
  );
}
