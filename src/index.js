import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App';
import './main.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { persistor } from './redux/store';

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-movies/">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
