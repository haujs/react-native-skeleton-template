import React, { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@store/index';
import MainContainer from '@navigation/index';
import LocalizeProvider from '@hooks/LocalizeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { BottomSheet } from '@components';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <LocalizeProvider>
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <PersistGate persistor={persistor}>
            <MainContainer />
            <BottomSheet />
          </PersistGate>
        </ReduxProvider>
      </SafeAreaProvider>
    </LocalizeProvider>
  );
};

export default App;
