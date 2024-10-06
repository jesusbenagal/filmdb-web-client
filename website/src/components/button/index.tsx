import './styles.scss';

interface ButtonProps {
  label: string;
  onClick: () => void;
  color: 'primary' | 'secondary' | 'success' | 'danger';
  darkMode?: boolean;
  isActive?: boolean;
}

export default function Button({
  label,
  onClick,
  color,
  darkMode = false,
  isActive = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button button--${color}${darkMode ? '--dark' : '--light'}`}
    >
      {label} {isActive && '(*)'}
    </button>
  );
}
