import { navigationRef } from '..';
import { Routes } from '../../types/navigation/routes';
import { RootStackParamList } from '../../types/navigation/navigation';
import { StackActions } from '@react-navigation/native';

// Interface for route configuration
interface RouteConfig {
  name: Routes;
  params?: Record<string, unknown>;
}

/**
 * Navigation Service with commonly used navigation functions
 */
export const NavigationService = {
  /**
   * Reset the entire navigation state to a specific route
   * @param routeName - Name of the route to reset to
   * @param params - Optional parameters for the route
   */
  resetRoot: (
    routeName: Routes,
    params: Partial<RootStackParamList[Routes]> = {},
  ) => {
    if (navigationRef.isReady()) {
      navigationRef.resetRoot({
        index: 0,
        routes: [{ name: routeName, params }],
      });
    }
  },

  /**
   * Navigate to a specific route
   * @param name - Route name
   * @param params - Route parameters
   */
  navigate: (name: keyof RootStackParamList, params?: RootStackParamList[typeof name]) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params as any);
    }
  },

  /**
   * Go back to the previous screen
   */
  goBack: () => {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  },

  /**
   * Replace the current screen with a new one
   * @param name - Route name
   * @param params - Route parameters
   */
  replace: <T extends keyof RootStackParamList>(
    name: T,
    params?: RootStackParamList[T]
  ) => {
    if (navigationRef.isReady()) {
      const replaceAction = StackActions.replace(name, params);
      navigationRef.dispatch(replaceAction);
    }
  },

  /**
   * Reset stack to the initial route with new parameters
   * @param params - Route parameters
   */
  resetToInitial: (params: Record<string, unknown> = {}) => {
    if (navigationRef.isReady()) {
      navigationRef.resetRoot({
        index: 0,
        routes: [{ name: 'LOGIN' as Routes, params }],
      });
    }
  },

  /**
   * Handle authentication state changes
   * @param isAuthenticated - Authentication state
   */
  handleAuthStateChange: (isAuthenticated: boolean) => {
    if (navigationRef.isReady()) {
      navigationRef.resetRoot({
        index: 0,
        routes: [{ name: (isAuthenticated ? 'HOME' : 'LOGIN') as Routes }],
      });
    }
  },

  /**
   * Push multiple screens to the stack
   * @param routes - Array of route objects
   */
  pushMultipleScreens: (routes: RouteConfig[]) => {
    if (navigationRef.isReady()) {
      navigationRef.resetRoot({
        index: routes.length - 1,
        routes: routes.map(route => ({
          name: route.name,
          params: route.params || {},
        })),
      });
    }
  },

  /**
   * Get the current route name
   * @returns Current route name or null
   */
  getCurrentRoute: (): Routes | null => {
    if (navigationRef.isReady()) {
      return (navigationRef.getCurrentRoute()?.name as Routes) || null;
    }
    return null;
  },

  /**
   * Check if the navigation stack can go back
   * @returns True if can go back, otherwise false
   */
  canGoBack: (): boolean => {
    return navigationRef.isReady() && navigationRef.canGoBack();
  },

  /**
   * Reset to a specific stack with multiple screens
   * @param stack - Stack name
   * @param screen - Screen name
   * @param params - Screen parameters
   */
  resetToStackWithScreen: <T extends keyof RootStackParamList>(
    stack: Routes,
    screen: T,
    params: Partial<RootStackParamList[T]> = {},
  ) => {
    if (navigationRef.isReady()) {
      navigationRef.resetRoot({
        index: 1,
        routes: [{ name: stack }, { name: screen, params }],
      });
    }
  },
};

export default NavigationService;