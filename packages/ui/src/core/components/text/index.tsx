import Typography, { TypographyProps } from '@mui/material/Typography';

interface ITextProps {
  text: string;
  variant: TypographyProps['variant'];
}

export default function Text({ text, variant }: ITextProps & TypographyProps) {
  return <Typography variant={variant}>{text}</Typography>;
}
