import React, {useRef, useCallback} from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {NavigationState, PartialState} from '@react-navigation/routers';
import {StackNavigator} from './navigators';
import {NavigationErrorBoundary} from '@/components/common/NavigationErrorBoundary';
import LoadingScreen from '@/components/common/Loading';
import {navigationMonitor} from './utils/navigationPerformance';
import {RootStackParamList} from '@/types/navigation/navigation';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const Navigation: React.FC = () => {
  const routeNameRef = useRef<string>();

  const getActiveRouteName = useCallback(
    (state: NavigationState | PartialState<NavigationState>): string => {
      const route = state.routes[state.index || 0];
      if (route.state) {
        return getActiveRouteName(route.state);
      }
      return route.name;
    },
    [],
  );

  const onStateChange = useCallback(
    (state: NavigationState | undefined) => {
      if (state) {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);

        if (previousRouteName !== currentRouteName) {
          // End previous screen monitoring
          if (previousRouteName) {
            navigationMonitor.endTransition(previousRouteName);
          }

          // Start new screen monitoring
          if (currentRouteName) {
            navigationMonitor.startTransition(currentRouteName);

            // You can add analytics here if you have it configured
            // analytics.logScreenView({
            //   screen_name: currentRouteName,
            //   screen_class: currentRouteName,
            // });
          }
        }

        routeNameRef.current = currentRouteName;
      }
    },
    [getActiveRouteName],
  );

  const onReady = useCallback(() => {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
  }, []);

  return (
    <NavigationErrorBoundary>
      <NavigationContainer
        ref={navigationRef}
        onReady={onReady}
        onStateChange={onStateChange}
        fallback={<LoadingScreen />}>
        <StackNavigator />
      </NavigationContainer>
    </NavigationErrorBoundary>
  );
};

export default Navigation;
