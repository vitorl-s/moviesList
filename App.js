import React from 'react';
import MoviesApp from './src/navigator/appNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MoviesApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
