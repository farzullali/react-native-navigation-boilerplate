import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the parameters for each route
export type RootStackParamList = {
  LOGIN: undefined;
  REGISTER: undefined;
  FORGOT_PASSWORD: undefined;
  HOME: undefined;
  PROFILE: { userId?: string };
  SETTINGS: undefined;
  PRODUCT_DETAILS: { productId: string };
  // ... add other routes and their params
};

// Navigation prop types
export type StackNavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};