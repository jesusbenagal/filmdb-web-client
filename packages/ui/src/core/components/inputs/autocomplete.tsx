import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface ISelectProps {
  options: { label: string; value: string }[];
  label: string;
  value: { label: string; value: string } | null;
  onChange: (value: { label: string; value: string } | null) => void;
  style?: React.CSSProperties;
}

export default function Select({
  options,
  label,
  value,
  onChange,
  style,
}: ISelectProps) {
  return (
    <Autocomplete
      options={options}
      value={value}
      onChange={(_, value) => onChange(value)}
      renderInput={(params) => <TextField {...params} label={label} />}
      style={style}
    />
  );
}
