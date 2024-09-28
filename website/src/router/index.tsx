import { Route, Routes } from 'react-router-dom';

import { APP_ROUTES } from '@/constants';

export default function Router() {
  return (
    <Routes>
      <Route path={APP_ROUTES.HOME} element={<h1>Home</h1>} />
    </Routes>
  );
}
