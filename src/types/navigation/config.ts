import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';

import { RootStackParamList } from './navigation';
import { IconRenderFn } from '../components/icon';
import { Routes } from './routes';


type CommonScreenOptions = {
  headerShown?: boolean;
  requiresAuth?: boolean;
  tab?: {
    // icon: IconRenderFn;
    label: string;
    icon: string;
  };
  drawer?: {
    // icon: IconRenderFn;
    label: string;
    icon: string;
  };
  stack?: {
    title: string;
  };
};

export interface BaseScreenConfig {
  name: Routes;
  component: React.ComponentType<any>;
  options?: CommonScreenOptions;
}

export interface StackScreenConfig {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
  options?: StackNavigationOptions;
  initialParams?: RootStackParamList[keyof RootStackParamList];
}


export interface TabScreenConfig extends BaseScreenConfig {
  options: CommonScreenOptions & {
    tabBarIcon: (props: { focused: boolean; color: string; size: number }) => React.ReactNode;
    tabBarLabel: string;
  };
}

export interface DrawerScreenConfig extends BaseScreenConfig {
  options: CommonScreenOptions & {
    drawerIcon: IconRenderFn;
    drawerLabel: string;
  };
}


export type ScreenConfigMap = {
  [K in Routes]: BaseScreenConfig & {
    name: K;
    params?: RootStackParamList[K];
  };
};


export interface AuthStackScreenConfig extends StackScreenConfig {
  name: 'LOGIN' | 'REGISTER' | 'FORGOT_PASSWORD';
  showHeader?: boolean;
}

export interface MainStackScreenConfig extends StackScreenConfig {
  name: 'HOME' | 'PROFILE' | 'SETTINGS';
  requiresAuth?: boolean;
}