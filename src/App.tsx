/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ErrorBoundary } from 'react-error-boundary';

// Components
import  Loading  from './components/common/Loading';
import  ErrorFallback  from './components/common/ErrorFallback';
import RootNavigator from './navigation';

import { DeviceEventEmitter} from 'react-native'

DeviceEventEmitter.addListener('error', (error) => {
  console.error('App Error:', error);
});

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => {
        // Log error to your error tracking service
        console.error('App Error:', error);
      }}
    >
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <RootNavigator />
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
