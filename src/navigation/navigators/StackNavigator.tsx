import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//config
import { NAVIGATOR_OPTIONS, NAVIGATOR_SCREENS } from '../config/screens.config';

//types
import { RootStackParamList } from '../../types/navigation/navigation';
import { StackScreenConfig } from '../../types/navigation/config';
import { ROUTES } from '../../types/navigation/routes';


const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  const isAuthenticated = true;

  const initialRouteName = isAuthenticated ? ROUTES.APP.HOME : ROUTES.AUTH.LOGIN;

  // Helper function to render stack screens
  const renderStackScreens = (navigationData: StackScreenConfig[]) => (
    <Stack.Group>
      {navigationData.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={item.options}
        />
      ))}
    </Stack.Group>
  );

  return (
    <Stack.Navigator initialRouteName={initialRouteName} screenOptions={NAVIGATOR_OPTIONS.stack}>
      {isAuthenticated 
        ? renderStackScreens(NAVIGATOR_SCREENS.stack.app)
        : renderStackScreens(NAVIGATOR_SCREENS.stack.auth)
      }
    </Stack.Navigator>
  );
};

export default StackNavigator;