import {ROUTES} from '@/types/navigation/routes';
import type {
  ScreenConfigMap,
  TabScreenConfig,
  DrawerScreenConfig,
  StackScreenConfig,
} from '@/types/navigation/config';

// Import screens
import HomeScreen from '@/components/screens/app/home/Home';
import LoginScreen from '@/components/screens/auth/Login';
import RegisterScreen from '@/components/screens/auth/Register';
import ForgotPasswordScreen from '@/components/screens/auth/ForgotPassword';
import ProfileSettingScreen from '@/components/screens/app/profile/Settings';
import SettingsScreen from '@/components/screens/app/settings/Settings';
// ... other screen imports

/**
 * Central screen configuration
 * Includes all screen configurations with their specific options
 */
export const SCREENS: ScreenConfigMap = {
  // Auth Screens
  LOGIN: {
    name: ROUTES.AUTH.LOGIN,
    component: LoginScreen,
    options: {
      headerShown: false,
      requiresAuth: false,
    },
  },
  REGISTER: {
    name: ROUTES.AUTH.REGISTER,
    component: RegisterScreen,
    options: {headerShown: false},
  },
  FORGOT_PASSWORD: {
    name: ROUTES.AUTH.FORGOT_PASSWORD,
    component: ForgotPasswordScreen,
    options: {headerShown: false},
  },

  // App Screens
  HOME: {
    name: ROUTES.APP.HOME,
    component: HomeScreen,
    options: {
      headerShown: true,
      requiresAuth: true,
      // Tab specific options
      tab: {
        icon: 'home',
        label: 'Home',
      },
      // Drawer specific options
      drawer: {
        icon: 'home',
        label: 'Home',
      },
      // Stack specific options
      stack: {
        title: 'Home',
      },
    },
  },
  PROFILE: {
    name: ROUTES.APP.PROFILE,
    component: ProfileSettingScreen,
    options: { headerShown: true }
  },
  SETTINGS: {
    name: ROUTES.APP.SETTINGS,
    component: SettingsScreen,
    options: { headerShown: true }
  }
  // ... other screens
} as const;

/**
 * Helper function to create navigator-specific screen configs
 */
const createNavigatorScreens = <T extends keyof typeof SCREENS>(
  screenKeys: T[],
  navigatorType: 'tab' | 'drawer' | 'stack',
) => {
  return screenKeys.map(key => ({
    name: SCREENS[key].name,
    component: SCREENS[key].component,
    options: {
      ...SCREENS[key].options,
      ...(SCREENS[key].options?.[navigatorType] || {}),
    },
  }));
};

/**
 * Navigator-specific screen configurations
 */
export const NAVIGATOR_SCREENS = {
  // Tab Navigator Screens
  tab: createNavigatorScreens(
    ['HOME', 'PROFILE', 'SETTINGS'] as const,
    'tab',
  ) as TabScreenConfig[],

  // Drawer Navigator Screens
  drawer: createNavigatorScreens(
    ['HOME', 'SETTINGS'] as const,
    'drawer',
  ) as DrawerScreenConfig[],

  // Stack Navigator Screens
  stack: {
    auth: createNavigatorScreens(
      ['LOGIN', 'REGISTER'] as const,
      'stack',
    ) as StackScreenConfig[],

    app: createNavigatorScreens(
      ['HOME', 'PROFILE', 'SETTINGS'] as const,
      'stack',
    ) as StackScreenConfig[],
  },
};

/**
 * Navigator options
 */
export const NAVIGATOR_OPTIONS = {
  tab: {
    lazy: true,
    freezeOnBlur: true,
    headerShown: false,
  },

  drawer: {
    lazy: true,
    headerShown: false,
  },

  stack: {
    headerShown: false,
  },
} as const;

/**
 * Initial route configurations
 */
export const INITIAL_ROUTES = {
  auth: ROUTES.AUTH.LOGIN,
  app: ROUTES.APP.HOME,
} as const;
