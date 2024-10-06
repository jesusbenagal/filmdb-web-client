import type { IStyles, Theme } from '@filmdb/ui';

export const getStyles = (theme: Theme): IStyles => ({
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    marginTop: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '.7fr 2fr',
    gap: '2rem',
  },
  imageContainer: {
    borderRadius: '32px',
    boxShadow: theme.shadows[3],
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '32px',
    objectFit: 'cover',
  },
  infoContainer: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '32px',
    padding: '2rem',
    boxShadow: theme.shadows[3],
  },
  infoPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  infoRow: {
    display: 'flex',
  },
  infoLabel: {
    fontWeight: 'bold',
  },
});
