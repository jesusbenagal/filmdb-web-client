import { Route, Routes } from 'react-router-dom';

import { APP_ROUTES } from '@/constants';

import MainView from '@/views/main-view';
import FilmView from '@/views/film-view';

export default function Router() {
  return (
    <Routes>
      <Route path={APP_ROUTES.MAIN} element={<MainView />} />
      <Route path={APP_ROUTES.FILM} element={<FilmView />} />
      <Route path="*" element={<MainView />} />
    </Routes>
  );
}
