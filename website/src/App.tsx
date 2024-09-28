import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppLayout from '@/layout/app-layout';

import Router from '@/router';

import store from '@/store/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppLayout>
          <Router />
        </AppLayout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
