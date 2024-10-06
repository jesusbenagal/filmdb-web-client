import CircularProgress, {
  type CircularProgressProps,
} from '@mui/material/CircularProgress';

export default function Spinner(props: CircularProgressProps) {
  return <CircularProgress {...props} />;
}
