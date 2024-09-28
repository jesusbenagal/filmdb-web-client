import { BrowserRouter } from 'react-router-dom';

import AppLayout from '@/layout/app-layout';

import Router from '@/router';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Router />
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
