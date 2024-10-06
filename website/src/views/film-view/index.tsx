import { Fragment } from 'react';
import { useTheme, Text, Spinner } from '@filmdb/ui';
import { useParams } from 'react-router-dom';

import { useGetFilmById } from '@/hooks/use-get-film-by-id';

import { getStyles } from './styles';
import { getFilmInfo } from '@/constants';

export default function FilmView() {
  const { id } = useParams();

  const theme = useTheme();
  const styles = getStyles(theme);

  const { data, isLoading } = useGetFilmById(id!);

  if (isLoading || !data) {
    return (
      <div style={styles.spinnerContainer}>
        <Spinner />
      </div>
    );
  }

  if (data.Error) {
    return <div>{data.Error}</div>;
  }

  return (
    <div style={styles.container}>
      <Text text={data.Title} variant="h5" />
      <div style={styles.grid}>
        <div style={styles.imageContainer}>
          <img src={data.Poster} alt={data.Title} style={styles.image} />
        </div>
        <div style={styles.infoContainer}>
          {getFilmInfo(data).map((panel, panelIndex) => (
            <div
              key={panelIndex}
              style={{
                ...styles.infoPanel,
                marginRight: panelIndex === 0 ? '1rem' : '0',
              }}
            >
              {panel.map((item, index) => (
                <Fragment key={index}>
                  <div style={styles.infoRow}>
                    <Text
                      text={item.label}
                      variant="subtitle2"
                      style={styles.infoLabel}
                    />
                    <Text text={item.value} variant="body1" />
                  </div>
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
