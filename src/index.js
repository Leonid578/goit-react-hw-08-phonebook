import React from 'react';
import ReactDOM from 'react-dom/client';
// import {createRoot} from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/modern-normalize/modern-normalize.css';
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
