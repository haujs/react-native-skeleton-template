import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import '@i18n';
import {MainNavigation} from '@navigation';
import {ModalControllerProvider} from '@providers';
import {persistor, store} from '@store';
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalControllerProvider>
          <BottomSheetModalProvider>
            <MainNavigation />
          </BottomSheetModalProvider>
        </ModalControllerProvider>
      </PersistGate>
    </Provider>
  </SafeAreaProvider>
);

export default App;
