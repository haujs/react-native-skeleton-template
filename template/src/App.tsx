import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from '@store';
import {MainNavigation} from '@navigation';
import {BottomSheetModalProvider as BottomSheetProvider} from '@gorhom/bottom-sheet';
import '@i18n';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BottomSheetProvider>
        <MainNavigation />
      </BottomSheetProvider>
    </PersistGate>
  </Provider>
);

export default App;
