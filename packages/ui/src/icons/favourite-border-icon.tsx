import { FavoriteBorder } from '@mui/icons-material';

interface IFavouriteBorderIconProps {
  onClick?: () => void;
}

export default function FavouriteBorderIcon({
  onClick,
}: IFavouriteBorderIconProps) {
  return (
    <FavoriteBorder
      onClick={onClick}
      style={{
        cursor: 'pointer',
      }}
    />
  );
}
