import Favorite from '@mui/icons-material/Favorite';

interface IFavouriteIconProps {
  onClick?: () => void;
}

export default function FavouriteIcon({ onClick }: IFavouriteIconProps) {
  return (
    <Favorite
      onClick={onClick}
      style={{
        cursor: 'pointer',
      }}
    />
  );
}
