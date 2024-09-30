import { Route, Routes } from 'react-router-dom';

import { APP_ROUTES } from '@/constants';

import MainView from '@/views/main-view';

export default function Router() {
  return (
    <Routes>
      <Route path={APP_ROUTES.MAIN} element={<MainView />} />
    </Routes>
  );
}
